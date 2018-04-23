import {
  connect,
} from 'react-redux';
import {
  login,
  logout,
} from './actions';
import LoginComponent from '../../core/loginWrapper/LoginWrapper';


const mapStateToProps = state => {
  return {
    user: state.login.user,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => {
      dispatch(login(user));
    },
    onLogout: () => {
      dispatch(logout());
    }
  };
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);

export default Login;
