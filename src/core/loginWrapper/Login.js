import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/fontawesome-free-solid';

const styles = () => ({
  faIcon: {
    width: '24px !important',
  },
});

class Login extends React.Component {
  state = {
    disabled: false,
  };

  componentWillMount() {
    if (this.props.user) {
      this.handleLogin();
    }
  }

  loginRedirect = userLogin => {
    if (this.props.autoLogin || userLogin) {
      window.location = `${this.props.api.auth}?return=${window.location.pathname}`;
    }
  };

  handleLogin = event => {
    const userLogin = typeof event !== 'undefined';
    const { api, handleSnackbarOpen, onLogin } = this.props;
    const loginRedirect = this.loginRedirect;
    const updateState = this.updateState;

    if (userLogin) {
      this.updateState('disabled', true);
    }

    $.ajax({
      url: api.auth,
      dataType: 'json',
      method: 'GET',
      success(data) {
        if (data.status === 'success') {
          onLogin(data.result);
          if (!userLogin) {
            handleSnackbarOpen('info', "We've automaticly logged you in");
          }
        } else if (data.status === 'redirect') {
          loginRedirect(userLogin);
        } else if (!data) {
          console.error('API request failed'); // eslint-disable-line no-console
        } else {
          console.error('Unknown API Response: ', data); // eslint-disable-line no-console
        }
        updateState('disabled', false);
      },
      error() {
        loginRedirect(userLogin);
      },
    });
  };

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes, iconOnly } = this.props;
    const { disabled } = this.state;

    return (
      <ListItem onClick={this.handleLogin} disabled={disabled} button>
        <ListItemIcon>
          <FontAwesomeIcon icon={faSignInAlt} className={classes.faIcon} />
        </ListItemIcon>
        {!iconOnly && <ListItemText inset primary="Login" />}
      </ListItem>
    );
  }
}

Login.propTypes = {
  api: PropTypes.object.isRequired,
  autoLogin: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  handleSnackbarOpen: PropTypes.func.isRequired,
  iconOnly: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default withStyles(styles)(Login);
