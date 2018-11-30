import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { mdiAccountCircle, mdiLoginVariant, mdiLogoutVariant } from '@mdi/js';
import MdiIcon from '@mdi/react';
import PropTypes from 'prop-types';
import React from 'react';
// remove
import testDataUser from '../../test-data/user';
import UserAccountSettings from '../UserAccount';

class Login extends React.Component {
  state = {
    isUasOpen: false,
  };

  handleOpenUas = () => {
    this.setState({
      isUasOpen: true,
    });
  };

  handleCloseUas = () => {
    this.setState({
      isUasOpen: false,
    });
  };

  handleLogin = () => {};

  render() {
    let { isLoggedIn = false, user = 'Account' } = this.props;
    const { isUasOpen } = this.state;
    user = testDataUser;
    return (
      <React.Fragment>
        <ListItem button onClick={isLoggedIn ? this.handleOpenUas : this.handleLogin}>
          <ListItemIcon>
            <Icon>
              <MdiIcon path={isLoggedIn ? mdiAccountCircle : mdiLoginVariant} size={1} />
            </Icon>
          </ListItemIcon>
          <ListItemText inset primary={isLoggedIn ? user.displayName : 'Login'} />
        </ListItem>
        <Collapse in={isLoggedIn} timeout="auto" unmountOnExit>
          <ListItem button>
            <ListItemIcon>
              <Icon>
                <MdiIcon path={mdiLogoutVariant} size={1} />
              </Icon>
            </ListItemIcon>
            <ListItemText inset primary="Logout" />
          </ListItem>
        </Collapse>
        <UserAccountSettings user={user} open={isUasOpen} onClose={this.handleCloseUas} />
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool, // redux state
  user: PropTypes.string, // redux state
};

export default Login;
