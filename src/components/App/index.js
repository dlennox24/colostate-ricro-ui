import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import defaultTheme from '../../assets/theme/muiThemeOverrides.json';
import AppTemplate from '../../core/AppTemplate';
import HttpError from '../HttpError';
// Redux reducers for lib
import login from '../../redux/Login/reducers';
import defaults from '../../assets/defaults.json';

const createGenerateClassName = () => {
  let counter = 0;
  return rule => {
    counter += 1;
    return `cru-${rule.options.sheet.options.classNamePrefix}-${rule.key}-${counter}`;
  };
};

class App extends React.Component {
  pageNotFound = () => {
    const {
      config = defaults, // set config to defaults if config is null
    } = this.props;
    return <HttpError code={404} config={config} />;
  };

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

    document.title =
      document.title === '' ? `${config.app.name} - ${config.unit.name}` : document.title;

    // Combine lib reducers with app reducers if they exist
    const combinedReducers = combineReducers({
      login,
      ...reducers,
    });

    return (
      <JssProvider generateClassName={createGenerateClassName()}>
        <React.Fragment>
          <CssBaseline />
          <Provider store={createStore(combinedReducers, config.defaultState, reduxMiddleware)}>
            <MuiThemeProvider theme={createMuiTheme(theme == null ? defaultTheme : theme)}>
              <Router
                basename={window.location.hostname === 'localhost' ? null : config.app.basename}
              >
                <AppTemplate config={config} sideNav={sideNav} disableGutters={disableGutters}>
                  {children}
                  <Switch>
                    {routes.map(route => route)}
                    <Route component={this.pageNotFound} />
                  </Switch>
                </AppTemplate>
              </Router>
            </MuiThemeProvider>
          </Provider>
        </React.Fragment>
      </JssProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.any,
  config: PropTypes.shape({
    api: PropTypes.shape({
      auth: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }),
    app: PropTypes.shape({
      name: PropTypes.string.isRequired,
      basename: PropTypes.string.isRequired,
      hasLogin: PropTypes.bool,
      hasAutoLogin: PropTypes.bool,
      sideNav: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        }),
      ),
      userDefaultProfileImg: PropTypes.string.isRequired,
    }),
    unit: PropTypes.shape({
      name: PropTypes.string.isRequired,
      siteHref: PropTypes.string.isRequired,
      contactHref: PropTypes.string.isRequired,
    }),
    defaultState: PropTypes.shape({
      login: PropTypes.shape({
        user: PropTypes.object,
      }),
    }),
  }),
  disableGutters: PropTypes.bool,
  reducers: PropTypes.object,
  reduxMiddleware: PropTypes.func,
  routes: PropTypes.array,
  sideNav: PropTypes.func,
  theme: PropTypes.object,
};

export default App;
