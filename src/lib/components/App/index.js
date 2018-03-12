import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  MuiThemeProvider,
  createMuiTheme
} from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import {
  combineReducers
} from 'redux';
import {
  Provider
} from 'react-redux';
import {
  createStore
} from 'redux';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';


import defaultTheme from '../../assets/theme/muiThemeOverrides.json';
import AppTemplate from '../../core/AppTemplate';
import HttpError from '../HttpError';

// Redux reducers for lib
import login from '../../redux/Login/reducers';
import defaults from '../../assets/defaults.json';

import JssProvider from 'react-jss/lib/JssProvider';
import {
  create
} from 'jss';
import {
  jssPreset
} from 'material-ui/styles';

const createGenerateClassName = () => {
  let counter = 0;
  return (rule, sheet) => `rat-${rule.key}-${counter++}`;
}

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

class App extends Component {
  pageNotFound = () => {
    const {
      config = defaults, // set config to defaults if config is null
    } = this.props;
    return <HttpError code={404} config={config}/>
  }

  render() {
    const {
      children,
      disableGutters,
      reducers,
      reduxMiddleware,
      sideNav,
      theme,
      routes = [],
      config = defaults, // set config to defaults if config is null
    } = this.props;

    document.title = document.title === '' ? config.app.name + ' - ' + config.unit.name : document.title;

    // Combine lib reducers with app reducers if they exist
    const combinedReducers = combineReducers({
      login,
      ...reducers
    });

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div>
          <CssBaseline/>
          <Provider store={createStore(combinedReducers, config.defaultState, reduxMiddleware)}>
            <MuiThemeProvider theme={createMuiTheme(theme == null ? defaultTheme : theme)}>
              <Router basename={window.location.hostname === 'localhost' ? null : config.app.basename}>
                <AppTemplate config={config} sideNav={sideNav} disableGutters={disableGutters} >
                  {children}
                  <Switch>
                    {routes.map(route=>route)}
                    <Route component={this.pageNotFound}/>
                  </Switch>
                </AppTemplate>
              </Router>
            </MuiThemeProvider>
          </Provider>
        </div>
      </JssProvider>
    );
  }
}

App.propTypes = {
  config: PropTypes.object.isRequired,
  disableGutters: PropTypes.bool,
  reducers: PropTypes.object,
  reduxMiddleware: PropTypes.func,
  routes: PropTypes.array,
  sideNav: PropTypes.func,
  theme: PropTypes.object,
};

export default App;