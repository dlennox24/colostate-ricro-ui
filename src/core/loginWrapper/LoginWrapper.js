import React from 'react';
import PropTypes from 'prop-types';
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

const styles = () => ({
  accountAvatar: {
    height: 24,
    width: 24,
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

  handleDropdownToggle = () => {
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
      onLogin, // Redux
      onLogout, // Redux
      user, // Redux
      userDefaultProfileImg,
    } = this.props;

    const { dropdownOpen, snackbar } = this.state;
    return (
      <React.Fragment>
        {_.isEmpty(user) ? (
          <Login
            api={api}
            autoLogin={autoLogin}
            handleSnackbarOpen={this.onHandleSnackbarOpen}
            onLogin={onLogin}
            user={user}
          />
        ) : (
          <React.Fragment>
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
                  src={user.profileImg || userDefaultProfileImg}
                  imgProps={{ alt: `${user.displayName} profile image` }}
                />
              </ListItemIcon>
              <ListItemText primary={user.displayName} />
              {dropdownOpen ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
            </ListItem>
            <Collapse component="li" in={dropdownOpen} timeout="auto" unmountOnExit>
              <List id="account-menu" classes={{ root: classes.listRoot }} disablePadding>
                <UserAccountSettings user={user} userDefaultProfileImg={userDefaultProfileImg} />
                <Logout
                  api={api}
                  handleSnackbarOpen={this.onHandleSnackbarOpen}
                  onLogout={onLogout}
                  user={user}
                />
              </List>
            </Collapse>
          </React.Fragment>
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
      </React.Fragment>
    );
  }
}

LoginWrapper.propTypes = {
  api: PropTypes.object.isRequired,
  autoLogin: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired, // Redux
  onLogout: PropTypes.func.isRequired, // Redux
  user: PropTypes.object, // Redux
  userDefaultProfileImg: PropTypes.string.isRequired,
};

export default withStyles(styles)(LoginWrapper);
