import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  MuiThemeProvider,
  createMuiTheme
} from 'material-ui/styles';
import {
  combineReducers
} from 'redux';
import {
  Provider
} from 'react-redux'
import {
  createStore
}
from 'redux';

import defaultTheme from './assets/theme2.json';
import AppTemplate from './core/AppTemplate';

// Redux reducers for lib
import login from './redux/Login/reducers';

class AppWrapper extends Component {
  render() {
    document.title = document.title === '' ? this.props.config.app.name + ' - ' + this.props.config.unit.name : document.title;
    //combine lib reducers with app reducers if they exist
    const reducers = combineReducers({
      login,
      ...this.props.reducers
    });
    return (
      <Provider store={createStore(reducers, this.props.config.defaultState, this.props.reduxMiddleware)}>
        <MuiThemeProvider theme={createMuiTheme(this.props.theme == null ? defaultTheme : this.props.theme)}>
          <AppTemplate config={this.props.config}>
            {this.props.children}
          </AppTemplate>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

AppWrapper.propTypes = {
  config: PropTypes.object.isRequired,
  reducers: PropTypes.func,
  reduxMiddleware: PropTypes.func,
  theme: PropTypes.object,
};

export default AppWrapper;
