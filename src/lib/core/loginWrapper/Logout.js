import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {
  withStyles,
} from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';

import apiCall from '../../utils/apiCall';

const styles = theme => ({
  accountAvatar: {
    height: '24px',
    width: '24px',
  },
  listRoot: {
    marginLeft: theme.spacing.unit * 5
  },
});

class LoginWrapper extends Component {
  state = {
    disabled: false,
  }

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  handleLogout = () => {
    const {
      onLogout,
      handleSnackbarOpen,
    } = this.props;
    const updateState = this.updateState;

    updateState('disabled', true);

    $.when(apiCall({
      url: this.props.api.location,
      uri: 'user/logout'
    })).then(
      (data) => {
        if (data.status === 'success') {
          onLogout();
          handleSnackbarOpen('info', 'To completely logout, you must close your browser');
        } else if (!data) {
          console.error('API request failed', data);
          handleSnackbarOpen('error', 'Failed to logout');
        } else {
          console.error('Unknown API Response: ', data);
          handleSnackbarOpen('error', 'Failed to logout');
        }
        updateState('disabled', false);
      },
      (data) => {
        handleSnackbarOpen('error', 'Failed to logout');
        updateState('disabled', false);
      }
    );
  }

  render() {
    const {
      iconOnly,
    } = this.props;

    const {
      disabled,
    } = this.state;

    return (
      <div>
        <ListItem
          id='logout'
          onClick={this.handleLogout}
          disabled={disabled}
          dense
          button
          >
          <ListItemIcon>
            <Icon>exit_to_app</Icon>
          </ListItemIcon>
          {!iconOnly && (<ListItemText inset primary='Logout' />)}
        </ListItem>
      </div>
    );
  }
}

LoginWrapper.propTypes = {
  api: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleSnackbarOpen: PropTypes.func.isRequired,
  iconOnly: PropTypes.bool,
  onLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginWrapper);
