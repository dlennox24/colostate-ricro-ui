import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {
  withStyles,
} from 'material-ui/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faSignIn,
} from '@fortawesome/fontawesome-pro-regular';

const styles = theme => ({
  faIcon: {
    width: '24px !important',
  },
});

class Login extends Component {
  state = {
    disabled: false,
  }

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  loginRedirect = userLogin => {
    if (this.props.autoLogin || userLogin) {
      window.location = this.props.api.auth + '?return=' + window.location.pathname;
    }
  }

  handleLogin = event => {
    let userLogin = typeof event !== 'undefined';
    const {
      api,
      handleSnackbarOpen,
      onLogin,
    } = this.props;
    const loginRedirect = this.loginRedirect;
    const updateState = this.updateState;
    userLogin && this.updateState('disabled', true);
    $.ajax({
      url: api.auth,
      dataType: 'json',
      method: 'GET',
      success: function(data) {
        if (data.status === 'success') {
          onLogin(data.result);
          if (!userLogin) {
            handleSnackbarOpen('info', 'We\'ve automaticly logged you in');
          }
        } else if (data.status === 'redirect') {
          loginRedirect(userLogin);
        } else if (!data) {
          console.error('API request failed');
        } else {
          console.error('Unknown API Response: ', data);
        }
        updateState('disabled', false);
      },
      error: function(data, textStatus) {
        loginRedirect(userLogin);
      },
    });
  }

  componentWillMount() {
    this.props.user && this.handleLogin();
  }

  render() {
    const {
      classes,
      iconOnly,
    } = this.props;
    const {
      disabled,
    } = this.state;

    return (
      <ListItem
        onClick={this.handleLogin}
        disabled={disabled}
        button
        >
        <ListItemIcon>
          <FontAwesomeIcon icon={faSignIn} className={classes.faIcon}/>
        </ListItemIcon>
        {!iconOnly && <ListItemText inset primary='Login' />}
      </ListItem>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  autoLogin: PropTypes.bool,
  api: PropTypes.object.isRequired,
  handleSnackbarOpen: PropTypes.func.isRequired,
  iconOnly: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
};

export default withStyles(styles)(Login);