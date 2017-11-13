import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import $ from 'jquery';
import {
  withStyles,
} from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Menu from 'material-ui/Menu';
import Button from 'material-ui/Button';
import {
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
    marginRight: 0,
    height: '40px',
    width: '40px',
  },
  container: {
    height: '100%',
  },
});

class Login extends Component {
  state = {
    menuOpen: false,
    menuAnchor: null,
    snackbar: {
      open: false,
      message: '',
      type: null,
      transition: null,
    }
  }

  handleClick = event => {
    this.setState({
      menuOpen: true,
      menuAnchor: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      menuOpen: false,
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
      window.location = this.props.api.auth + "?return=" + window.location.pathname;
    }
  }

  handleLogin = event => {
    let userLogin = typeof event !== 'undefined';
    let props = this.props;
    let handleSnackbarOpen = this.handleSnackbarOpen;
    let loginRedirect = this.loginRedirect;
    $.ajax({
      url: props.api.auth,
      dataType: "json",
      method: "GET",
      success: function(data) {
        if (data.status === 'success') {
          props.onLogin(data.result);
          if (!userLogin) {
            handleSnackbarOpen('info', 'We\'ve automaticly logged you in');
          }
        } else if (data.status === 'redirect') {
          loginRedirect(userLogin);
        } else if (!data) {
          console.error("API request failed");
        } else {
          console.error("Unknown API Response: ", data);
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
        console.error("API request failed", data);
        this.handleSnackbarOpen('error', 'Failed to logout');
      } else {
        console.error("Unknown API Response: ", data);
        this.handleSnackbarOpen('error', 'Failed to logout');
      }
    });
  }

  componentWillMount() {
    this.handleLogin();
  }

  render() {
    const classes = this.props.classes;

    if (!_.isEmpty(this.props.height)) {
      if (!this.props.height.match(/^[0-9]+(em|ex|ch|rem|vw|vh|vmin|vmax|%|cm|mm|in|px|pt|pc)$/g)) {
        console.error('ricror-app-template/Login\nInvalid height value: ' + this.props.height);
      }
    }

    let snackbar = this.state.snackbar.message == null ? null : (
      <Snackbar
        id='login-message'
        state={this.state.snackbar}
        type={this.state.snackbar.type}
        onRequestClose={this.handleSnackbarClose}
        >
        {this.state.snackbar.message}
      </Snackbar>
    );

    if (_.isEmpty(this.props.user)) {
      return (
        <div>
          <Button onClick={this.handleLogin}>login</Button>
          {snackbar}
        </div>
      );
    } else {
      return (
        <div style={{height: this.props.height}}>
          <ListItem
            id='account-menu-button'
            aria-owns='account-menu'
            aria-haspopup='true'
            aria-label='Account'
            className={classes.container}
            onClick={this.handleClick}
            button
            dense
            >
            <ListItemIcon>
              <Avatar className={classes.accountAvatar} src={defaultProfileImg} />
            </ListItemIcon>
            <ListItemText
              primary={this.props.user.displayName}
              secondary={this.props.user.csuId.toString().replace(/(.{3})/g, '$1 ')}
              />
          </ListItem>
          <Menu
            id='account-menu'
            anchorEl={this.state.menuAnchor}
            open={this.state.menuOpen}
            onRequestClose={this.handleRequestClose}
            >
            <UserAccountSettings user={this.props.user}/>
            <ListItem id='logout' button onClick={this.handleLogout}>
              <ListItemIcon>
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText inset primary='Logout' />
            </ListItem>
          </Menu>
          {snackbar}
        </div>
      )
    }
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired,
  autoLogin: PropTypes.bool,
  user: PropTypes.object,
  height: PropTypes.string,
};

export default withStyles(styles)(Login);
