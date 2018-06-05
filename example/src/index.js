import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import App from 'colostate-ricro-ui'; // eslint-disable-line
import registerServiceWorker from './registerServiceWorker';
import Components from './components';
import config from './config.json';
import SideNavEx from './SideNavEx';
import TypographyEx from './TypographyEx';
import { version, name as appName } from '../package.json';

console.log(`${appName}@${version}`); // eslint-disable-line no-console

const routes = [
  <Route key={0} path="/" exact component={TypographyEx} />,
  <Route key={1} path="/component/:component" exact component={Components} />,
];

const reduxMiddleware =
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
  <App config={config} sideNav={SideNavEx} routes={routes} reduxMiddleware={reduxMiddleware} />,
  document.getElementById('root'),
);
registerServiceWorker();
