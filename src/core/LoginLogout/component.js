import { Snackbar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Portal from '@material-ui/core/Portal';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import IconAccountCircle from 'mdi-material-ui/AccountCircle';
import IconChevronDown from 'mdi-material-ui/ChevronDown';
import IconChevronUp from 'mdi-material-ui/ChevronUp';
import IconLoginVariant from 'mdi-material-ui/LoginVariant';
import IconLogoutVariant from 'mdi-material-ui/LogoutVariant';
import PropTypes from 'prop-types';
import React from 'react';
import userDefaultProfileImg from '../../assets/img/default-profile.svg';
import IconSnackbarContent from '../../component/IconSnackbarContent';
import UserProfile from '../../component/UserProfile';
import styles from './styles';

const hasLoginSuccess = window.location.hash === '#login-success';

class LoginLogoutComponent extends React.Component {
  state = {
    isLoginLoading: false,
    isLogoutLoading: false,
    isUserProfileOpen: false,
    snackbar: {
      open: false,
      variant: null,
      message: '',
    },
  };

  handleOpenUserProfile = () => {
    this.setState({
      isUserProfileOpen: true,
    });
  };

  handleCloseUserProfile = () => {
    this.setState({
      isUserProfileOpen: false,
    });
  };

  handleToggleDropDown = () => {
    this.setState(state => ({
      isDropDownOpen: !state.isDropDownOpen,
    }));
  };

  handleSnackbarClose = () => {
    this.setState(state => ({
      snackbar: {
        ...state.snackbar,
        open: false,
      },
    }));
  };

  handleLogin = () => {
    /*
     * When a user logs in and they don't have a current Shibboleth session
     * they are redirected to the Shibboleth login page. When they are returned
     * by the login page (api.host+api.auth) the application cannot know if it
     * should perform a login check again (unless hasAutoLogin is true in
     * config).
     *
     * To get around this the login page '#login-success' appended to the end
     * of the url as a hash value. The app checks window.location.hash to see
     * if it should perform a login check and then rests the hash value to
     * remove it from the url.
     *
     * Doesn't use api.axios instance because the baseURL of api.axios points
     * to the current version of the API. Authentication is at least one level
     * higher.
     */
    this.setState({ isLoginLoading: true });
    const { api } = this.props;
    axios
      .get(api.host + api.auth)
      .then(response => {
        if (response.data === 'redirect') {
          window.location = `${api.host + api.auth}?return=${window.location.href}`;
        }

        this.props.handleLogin(response.data.result);
        if (hasLoginSuccess) {
          // resets window.location.hash to remove unneeded #login-success
          window.history.replaceState(null, null, ' ');
        }
        this.setState({
          isLoginLoading: false,
          snackbar: {
            open: true,
            variant: 'success',
            message: 'Successfully logged in!',
          },
        });
      })
      .catch(() => {
        this.setState({
          isLoginLoading: false,
          snackbar: {
            open: true,
            variant: 'error',
            message: 'Failed to login. Please contact us if this error persists.',
          },
        });
      });
  };

  handleLogout = () => {
    this.setState({ isLogoutLoading: true });
    const { api } = this.props;
    api.axios
      .get('/user/logout/')
      .then(() => {
        this.props.handleLogout();
        this.setState({
          isLogoutLoading: false,
          snackbar: {
            open: true,
            variant: 'success',
            message: 'Successfully logged out!',
          },
        });
      })
      .catch(() => {
        this.setState({
          isLogoutLoading: false,
          snackbar: {
            open: true,
            variant: 'error',
            message: 'Failed to logout. Please contact us if this error persists.',
          },
        });
      });
  };

  componentDidMount = () => {
    if (hasLoginSuccess || this.props.hasAutoLogin) {
      this.handleLogin();
    }
  };

  render() {
    const { classes, user } = this.props;
    const {
      isDropDownOpen,
      isLoginLoading,
      isLogoutLoading,
      isUserProfileOpen,
      snackbar,
    } = this.state;
    const isLoggedIn = user !== 'loggedout' && user != null;

    const loginIcons = isLoggedIn ? (
      <Avatar
        className={classes.profileAvatar}
        alt={`${user.displayName}'s profile image`}
        src={user.profileImg || userDefaultProfileImg}
      />
    ) : (
      <IconLoginVariant />
    );

    const loadingProgressCircle = <CircularProgress color="secondary" size={24} />;

    return (
      <React.Fragment>
        <ListItem
          button
          onClick={isLoggedIn ? this.handleToggleDropDown : this.handleLogin}
          disabled={isLoginLoading}
        >
          <ListItemIcon>{isLoginLoading ? loadingProgressCircle : loginIcons}</ListItemIcon>
          <ListItemText inset primary={isLoggedIn ? user.displayName : 'Login'} />
          {isLoggedIn && (isDropDownOpen ? <IconChevronUp /> : <IconChevronDown />)}
        </ListItem>
        <Collapse className={classes.dropDown} in={isDropDownOpen && isLoggedIn}>
          <ListItem button dense onClick={this.handleOpenUserProfile}>
            <ListItemIcon>
              <IconAccountCircle />
            </ListItemIcon>
            <ListItemText inset primary="Account" />
          </ListItem>
          <ListItem button dense onClick={this.handleLogout} disabled={isLogoutLoading}>
            <ListItemIcon>
              {isLogoutLoading ? loadingProgressCircle : <IconLogoutVariant />}
            </ListItemIcon>
            <ListItemText inset primary="Logout" />
          </ListItem>
        </Collapse>
        {isLoggedIn && (
          <UserProfile
            variant="dialog"
            user={user}
            open={isUserProfileOpen}
            onClose={this.handleCloseUserProfile}
          />
        )}
        <Portal>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={this.handleSnackbarClose}
          >
            <IconSnackbarContent
              variant={snackbar.variant}
              onClose={this.handleSnackbarClose}
              message={snackbar.message}
            />
          </Snackbar>
        </Portal>
      </React.Fragment>
    );
  }
}

LoginLogoutComponent.propTypes = {
  api: PropTypes.object.isRequired, // redux state
  classes: PropTypes.object.isRequired, // MUI withStyles()
  handleLogin: PropTypes.func.isRequired, // redux - index.js:mapDispatchToProps
  handleLogout: PropTypes.func.isRequired, // redux - index.js:mapDispatchToProps
  hasAutoLogin: PropTypes.bool.isRequired, // redux state
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), // redux state
};

export default withStyles(styles)(LoginLogoutComponent);
