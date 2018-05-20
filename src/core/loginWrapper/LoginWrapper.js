import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Snackbar, { slideTransition } from '../../components/Snackbar';
import UserAccountSettings from '../UserAccountSettings';
import Login from './Login';
import Logout from './Logout';

const styles = theme => ({
  accountAvatar: {
    height: '24px',
    width: '24px',
  },
  listRoot: {
    marginLeft: theme.spacing.unit * 5,
  },
});

class LoginWrapper extends React.Component {
  state = {
    dropdownOpen: false,
    snackbar: {
      open: false,
      message: '',
      type: null,
      transition: null,
    },
  };

  onHandleSnackbarOpen = (type, message) => {
    this.setState({
      snackbar: {
        open: true,
        type,
        message,
        transition: slideTransition.bind(this),
      },
    });
  };

  onHandleDropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };
  handleSnackbarClose = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        open: false,
      },
    });
  };

  render() {
    const {
      api,
      autoLogin,
      classes,
      iconOnly,
      onLogin, // Redux
      onLogout, // Redux
      user, // Redux
    } = this.props;

    const { dropdownOpen, snackbar } = this.state;

    return (
      <div>
        {_.isEmpty(this.props.user) ? (
          <Login
            api={api}
            autoLogin={autoLogin}
            handleSnackbarOpen={this.onHandleSnackbarOpen}
            iconOnly={iconOnly}
            onLogin={onLogin}
            user={user}
          />
        ) : (
          <div>
            <ListItem
              aria-owns="account-menu"
              aria-haspopup="true"
              aria-label="Account"
              onClick={this.handleDropdownToggle}
              button
            >
              <ListItemIcon>
                <Avatar
                  className={classes.accountAvatar}
                  src={user.profileImg}
                  imgProps={{ alt: `${user.displayName} profile image` }}
                />
              </ListItemIcon>
              {!iconOnly && <ListItemText primary={user.displayName} />}
              {!iconOnly && (dropdownOpen ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>)}
            </ListItem>
            <Collapse component="li" in={dropdownOpen} timeout="auto" unmountOnExit>
              <List
                id="account-menu"
                className={classNames(iconOnly ? 'sideNavSubMenuClosed' : 'sideNavSubMenu')}
                classes={iconOnly ? null : { root: classes.listRoot }}
                disablePadding
              >
                <UserAccountSettings iconOnly={iconOnly} user={user} />
                <Logout
                  api={api}
                  handleSnackbarOpen={this.onHandleSnackbarOpen}
                  iconOnly={iconOnly}
                  onLogout={onLogout}
                  user={user}
                />
              </List>
            </Collapse>
          </div>
        )}
        {snackbar.message && (
          <Snackbar
            id="login-message"
            state={snackbar}
            type={snackbar.type}
            onClose={this.handleSnackbarClose}
          >
            {snackbar.message}
          </Snackbar>
        )}
      </div>
    );
  }
}

LoginWrapper.propTypes = {
  api: PropTypes.object.isRequired,
  autoLogin: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  iconOnly: PropTypes.bool,
  onLogin: PropTypes.func.isRequired, // Redux
  onLogout: PropTypes.func.isRequired, // Redux
  user: PropTypes.object, // Redux
};

export default withStyles(styles)(LoginWrapper);
