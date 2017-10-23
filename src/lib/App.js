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
    document.title = document.title === '' ? this.props.config.app.name + ' - ' + this.props.config.unit.name : document.title;
    // Combine lib reducers with app reducers if they exist
    const reducers = combineReducers({
      login,
      ...this.props.reducers
    });
    let config = this.props.config == null ? defaults : this.props.config;
    return (
      <Provider store={createStore(reducers, config.defaultState, this.props.reduxMiddleware)}>
        <MuiThemeProvider theme={createMuiTheme(this.props.theme == null ? defaultTheme : this.props.theme)}>
          <AppTemplate config={config} header={this.props.header} noGutters={this.props.noGutters}>
            {this.props.children}
          </AppTemplate>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  config: PropTypes.object.isRequired,
  reducers: PropTypes.func,
  reduxMiddleware: PropTypes.func,
  theme: PropTypes.object,
  header: PropTypes.node,
  headerConfig: PropTypes.object,
  noGutters: PropTypes.bool,
};

export default App;
