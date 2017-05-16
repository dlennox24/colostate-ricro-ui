import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import config from './config.json';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(config.muiTheme)}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
