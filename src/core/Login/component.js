import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { mdiLoginVariant, mdiLogoutVariant } from '@mdi/js';
import MdiIcon from '@mdi/react';
import PropTypes from 'prop-types';
import React from 'react';
import userDefaultProfileImg from '../../assets/img/default-profile.svg';
import UserProfile from '../../component/UserProfile';
import testDataUser from '../../test-data/user'; // TODO: remove after linkage with redux
import styles from './styles';

class Login extends React.Component {
  state = {
    isUserProfileOpen: false,
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

  handleLogin = () => {
    // TODO: add call to api to fetch user data on login
    this.props.handleLogin(testDataUser);
  };

  render() {
    const { classes, handleLogout, theme, user } = this.props;
    const { isDropDownOpen, isUserProfileOpen } = this.state;
    const isLoggedIn = Boolean(user);
    return (
      <React.Fragment>
        <ListItem button onClick={isLoggedIn ? this.handleToggleDropDown : this.handleLogin}>
          <ListItemIcon>
            {isLoggedIn ? (
              <Avatar
                className={classes.profileAvatar}
                alt={`${user.displayName}'s profile image`}
                src={user.profileImg || userDefaultProfileImg}
              />
            ) : (
              <Icon>
                <MdiIcon path={mdiLoginVariant} size={1} color={theme.palette.icon.main} />
              </Icon>
            )}
          </ListItemIcon>
          <ListItemText inset primary={isLoggedIn ? user.displayName : 'Login'} />
          {isLoggedIn && (
            <Icon>
              {isDropDownOpen && isLoggedIn ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            </Icon>
          )}
        </ListItem>
        <Collapse className={classes.dropDown} in={isDropDownOpen && isLoggedIn}>
          <ListItem button dense onClick={this.handleOpenUserProfile}>
            <ListItemIcon>
              <Icon>account_circle</Icon>
            </ListItemIcon>
            <ListItemText inset primary="Account" />
          </ListItem>
          <ListItem button dense onClick={handleLogout}>
            <ListItemIcon>
              <Icon>
                <MdiIcon path={mdiLogoutVariant} size={1} color={theme.palette.icon.main} />
              </Icon>
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
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles
  handleLogin: PropTypes.func.isRequired, // redux - index.js:mapDispatchToProps
  handleLogout: PropTypes.func.isRequired, // redux - index.js:mapDispatchToProps
  theme: PropTypes.object.isRequired, // MUI withTheme
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]), // redux state
};

export default withTheme()(withStyles(styles)(Login));
