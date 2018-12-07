import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withTheme } from '@material-ui/core/styles';
import { mdiAccountCircle, mdiLoginVariant, mdiLogoutVariant } from '@mdi/js';
import MdiIcon from '@mdi/react';
import PropTypes from 'prop-types';
import React from 'react';
import UserProfile from '../../component/UserProfile';
import testDataUser from '../../test-data/user'; // TODO: remove after linkage with redux

class Login extends React.Component {
  state = {
    isUserProfileOpen: false,
  };

  handleOpenUas = () => {
    this.setState({
      isUserProfileOpen: true,
    });
  };

  handleCloseUas = () => {
    this.setState({
      isUserProfileOpen: false,
    });
  };

  handleLogin = () => {};

  render() {
    const { isLoggedIn = false, theme } = this.props;
    let { user = 'Account' } = this.props;
    const { isUserProfileOpen } = this.state;
    user = testDataUser;
    return (
      <React.Fragment>
        <ListItem button onClick={isLoggedIn ? this.handleOpenUas : this.handleLogin}>
          <ListItemIcon>
            <Icon>
              <MdiIcon
                path={isLoggedIn ? mdiAccountCircle : mdiLoginVariant}
                size={1}
                color={theme.palette.icon.main}
              />
            </Icon>
          </ListItemIcon>
          <ListItemText inset primary={isLoggedIn ? user.displayName : 'Login'} />
        </ListItem>
        <Collapse in={isLoggedIn} timeout="auto" unmountOnExit>
          <ListItem button>
            <ListItemIcon>
              <Icon>
                <MdiIcon path={mdiLogoutVariant} size={1} color={theme.palette.icon.main} />
              </Icon>
            </ListItemIcon>
            <ListItemText inset primary="Logout" />
          </ListItem>
        </Collapse>
        <UserProfile
          variant="dialog"
          user={user}
          open={isUserProfileOpen}
          onClose={this.handleCloseUas}
        />
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool, // redux state
  theme: PropTypes.object.isRequired, // MUI withTheme
  user: PropTypes.string, // redux state
};

export default withTheme()(Login);
