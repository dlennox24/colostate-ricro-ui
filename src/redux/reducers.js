import { combineReducers } from 'redux';
import login from './Login/reducers';

const reducers = combineReducers({
  login,
});

export default reducers;
