import {
  combineReducers
} from 'redux';
// import * as reducer from './Login/reducers';
import login from './Login/reducers';

const reducers = combineReducers({
  // ...reducer,
  login
});

export default reducers;
