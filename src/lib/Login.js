import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import $ from 'jquery';
import {
  withStyles,
} from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Collapse from 'material-ui/transitions/Collapse';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';

import UserAccountSettings from './UserAccountSettings';
import Snackbar, {
  slideTransition
} from './Snackbar';
import apiCall from './utils/apiCall';
import defaultProfileImg from './assets/images/default-profile.png';

const styles = theme => ({
  accountAvatar: {
    height: '24px',
    width: '24px',
  },
  listRoot: {
    marginLeft: theme.spacing.unit * 5
  },
});

class Login extends Component {
  state = {
    dropdownOpen: false,
    snackbar: {
      open: false,
      message: '',
      type: null,
      transition: null,
    }
  }

  handleDropdownToggle = event => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  handleSnackbarOpen = (type, message) => {
    this.setState({
      snackbar: {
        open: true,
        type,
        message,
        transition: slideTransition.bind(this),
      }
    });
  }

  handleSnackbarClose = () => {
    this.setState({
      snackbar: {
        open: false,
      }
    });
  }

  loginRedirect = userLogin => {
    if (this.props.autoLogin || userLogin) {
      window.location = this.props.api.auth + '?return=' + window.location.pathname;
    }
  }

  handleLogin = event => {
    let userLogin = typeof event !== 'undefined';
    let props = this.props;
    let handleSnackbarOpen = this.handleSnackbarOpen;
    let loginRedirect = this.loginRedirect;
    $.ajax({
      url: props.api.auth,
      dataType: 'json',
      method: 'GET',
      success: function(data) {
        if (data.status === 'success') {
          props.onLogin(data.result);
          if (!userLogin) {
            handleSnackbarOpen('info', 'We\'ve automaticly logged you in');
          }
        } else if (data.status === 'redirect') {
          loginRedirect(userLogin);
        } else if (!data) {
          console.error('API request failed');
        } else {
          console.error('Unknown API Response: ', data);
        }
      },
      error: function(data, textStatus) {
        loginRedirect(userLogin);
      },
    });
  }

  handleLogout = () => {
    $.when(apiCall({
      url: this.props.api.location,
      uri: 'user/logout'
    })).then((data) => {
      if (data.status === 'success') {
        this.handleRequestClose();
        this.props.onLogout();
        this.handleSnackbarOpen('info', 'To completely logout, you must close your browser');
      } else if (!data) {
        console.error('API request failed', data);
        this.handleSnackbarOpen('error', 'Failed to logout');
      } else {
        console.error('Unknown API Response: ', data);
        this.handleSnackbarOpen('error', 'Failed to logout');
      }
    });
  }

  componentWillMount() {
    this.handleLogin();
  }

  render() {
    const {
      classes,
      iconOnly,
      user,
    } = this.props;

    const {
      snackbar,
      dropdownOpen,
    } = this.state;

    let snackbarComponent = snackbar.message && (
      <Snackbar
        id='login-message'
        state={snackbar}
        type={snackbar.type}
        onRequestClose={this.handleSnackbarClose}
        >
        {snackbar.message}
      </Snackbar>
    );


    if (_.isEmpty(this.props.user)) {
      return (
        <div>
          <ListItem button>
            <ListItemIcon>
              <Icon>account_circle</Icon>
            </ListItemIcon>
            <ListItemText inset primary='Login' />
          </ListItem>
          {snackbarComponent}
        </div>
      );
    } else {
      return (
        <div>
          <ListItem
            aria-owns='account-menu'
            aria-haspopup='true'
            aria-label='Account'
            onClick={this.handleDropdownToggle}
            button
            >
            <ListItemIcon>
              <Avatar className={classes.accountAvatar} src={defaultProfileImg} />
            </ListItemIcon>
            {!iconOnly && (<ListItemText primary={user.displayName} />)}
            {!iconOnly && (dropdownOpen ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>)}
          </ListItem>
          <Collapse component='li' in={dropdownOpen} timeout='auto' unmountOnExit>
            <List
              id='account-menu'
              className={classNames(iconOnly ? 'sideNavSubMenuClosed' : 'sideNavSubMenu')}
              classes={iconOnly ? null : {
                root: classes.listRoot
              }}
              disablePadding
              >
              <UserAccountSettings iconOnly={iconOnly} user={user}/>
              <ListItem dense id='logout' button onClick={this.handleLogout}>
                <ListItemIcon>
                  <Icon>exit_to_app</Icon>
                </ListItemIcon>
                {!iconOnly && (<ListItemText inset primary='Logout' />)}
              </ListItem>
            </List>
          </Collapse>
          {snackbarComponent}
        </div>
      );
    }
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired,
  autoLogin: PropTypes.bool,
  user: PropTypes.object,
  height: PropTypes.string,
  iconOnly: PropTypes.bool,
};

export default withStyles(styles)(Login);
