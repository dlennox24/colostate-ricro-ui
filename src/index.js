import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import config from './config.json';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(config.muiTheme)}>
    <AppContainer config={config} style={{border: '3px solid red', height: '1500px'}}>
      <h2 className='text-center'>#main-content</h2>
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('root')
);
