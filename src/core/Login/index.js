import { connect } from 'react-redux';
import { login, logout } from './actions';
import LoginComponent from './component';

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

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);

export default Login;
