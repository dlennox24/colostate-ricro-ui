import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  Route,
} from 'react-router-dom';

import App from '../lib/components/App';

import Components from './components';
import config from './config.json';
import SideNavEx from './SideNavEx';
import TypographyEx from './TypographyEx';

import {
  version,
  name as appName,
} from '../../package.json';
console.log(appName + '@' + version);

const routes = [
  <Route key={0} path='/' exact component={TypographyEx}/>,
  <Route key={1} path='/component/:component' exact component={Components}/>
];

ReactDOM.render(
  <App
    config={config}
    sideNav={SideNavEx}
    routes={routes}
    reduxMiddleware={window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}
    />,
  document.getElementById('root')
);
registerServiceWorker();