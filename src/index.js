import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  MuiThemeProvider,
  createMuiTheme
} from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppContainer from './csu-app-template/AppContainer';
import config from './config.json';

import Typography from 'material-ui/Typography';

injectTapEventPlugin();

const theme = createMuiTheme({
  palette: createPalette(config.theme.palette)
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppContainer config={config}>
      <Typography type='display2' className='text-center'>#main-content</Typography>
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
