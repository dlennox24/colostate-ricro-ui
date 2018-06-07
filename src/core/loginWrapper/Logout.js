import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid';
import apiCall from '../../utils/apiCall';

const styles = theme => ({
  accountAvatar: {
    height: '24px',
    width: '24px',
  },
  listRoot: {
    marginLeft: theme.spacing.unit * 5,
  },
  faIcon: {
    width: '24px !important',
  },
});

class Logout extends React.Component {
  state = {
    disabled: false,
  };

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleLogout = () => {
    const { onLogout, handleSnackbarOpen } = this.props;
    const updateState = this.updateState;

    updateState('disabled', true);

    $.when(
      apiCall({
        url: this.props.api.location,
        uri: 'user/logout',
      }),
    ).then(
      data => {
        if (data.status === 'success') {
          onLogout();
          handleSnackbarOpen('info', 'To completely logout, you must close your browser');
        } else if (!data) {
          console.error('API request failed', data); // eslint-disable-line no-console
          handleSnackbarOpen('error', 'Failed to logout');
        } else {
          console.error('Unknown API Response: ', data); // eslint-disable-line no-console
          handleSnackbarOpen('error', 'Failed to logout');
        }
        updateState('disabled', false);
      },
      () => {
        handleSnackbarOpen('error', 'Failed to logout');
        updateState('disabled', false);
      },
    );
  };

  render() {
    const { classes, iconOnly } = this.props;

    const { disabled } = this.state;
    return (
      <React.Fragment>
        <ListItem id="logout" onClick={this.handleLogout} disabled={disabled} dense button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faSignOutAlt} className={classes.faIcon} />
          </ListItemIcon>
          {!iconOnly && <ListItemText inset primary="Logout" />}
        </ListItem>
      </React.Fragment>
    );
  }
}

Logout.propTypes = {
  api: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleSnackbarOpen: PropTypes.func.isRequired,
  iconOnly: PropTypes.bool,
  onLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(Logout);
