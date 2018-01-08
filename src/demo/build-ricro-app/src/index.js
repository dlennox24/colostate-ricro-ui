import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  Route,
} from 'react-router-dom';

import App from 'ricro-app-template';

import Components from './components';
import config from './config.json';
import SideNavEx from './SideNavEx';
import TypographyEx from './TypographyEx';

import {
  version,
  name as appName,
  homepage,
} from '../package.json';
console.log(appName + '@' + version);

ReactDOM.render(
  <App config={config} homepage={homepage} sideNav={SideNavEx} reduxMiddleware={window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}>
    <Route path='/' exact component={TypographyEx}/>
    <Route path='/component/:component' component={Components}/>
  </App>,
  document.getElementById('root')
);
registerServiceWorker();
