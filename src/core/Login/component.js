import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { mdiAccountCircle, mdiLoginVariant, mdiLogoutVariant } from '@mdi/js';
import MdiIcon from '@mdi/react';
import PropTypes from 'prop-types';
import React from 'react';
import testDataUser from '../../test-data/user'; // remove
import UserAccountSettings from '../UserAccount';
import { withTheme } from '@material-ui/core/styles';

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
    const { isLoggedIn = false, theme } = this.props;
    let { user = 'Account' } = this.props;
    const { isUasOpen } = this.state;
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
        <UserAccountSettings user={user} open={isUasOpen} onClose={this.handleCloseUas} />
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
