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

import defaultTheme from './assets/theme.json';
import AppTemplate from './core/AppTemplate';

// Redux reducers for lib
import login from './redux/Login/reducers';
import defaults from './assets/defaults.json';

class App extends Component {
  render() {
    const {
      sideNav,
      disableGutters,
      theme,
      children,
      reducers,
      reduxMiddleware,
    } = this.props;
    const {
      config = defaults
    } = this.props;

    document.title = document.title === '' ? config.app.name + ' - ' + config.unit.name : document.title;

    // Combine lib reducers with app reducers if they exist
    const combinedReducers = combineReducers({
      login,
      ...reducers
    });

    return (
      <Provider store={createStore(combinedReducers, config.defaultState, reduxMiddleware)}>
        <MuiThemeProvider theme={createMuiTheme(theme == null ? defaultTheme : theme)}>
          <AppTemplate config={config} sideNav={sideNav} disableGutters={disableGutters} >
            {children}
          </AppTemplate>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  config: PropTypes.object.isRequired,
  disableGutters: PropTypes.bool,
  reducers: PropTypes.func,
  reduxMiddleware: PropTypes.func,
  sideNav: PropTypes.func,
  theme: PropTypes.object,
};

export default App;
