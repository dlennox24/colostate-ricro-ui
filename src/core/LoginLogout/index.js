import { connect } from 'react-redux';
import { login, logout } from './actions';
import LoginLogoutComponent from './component';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: user => {
      dispatch(login(user));
    },
    handleLogout: () => {
      dispatch(logout());
    },
  };
};

const LoginLogout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginLogoutComponent);

export default LoginLogout;
