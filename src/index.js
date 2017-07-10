import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  MuiThemeProvider,
  createMuiTheme
} from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import Typography from 'material-ui/Typography';

import AppContainer from './csu-app-template/AppContainer';
import config from './config.json';
import theme from './csu-app-template/theme.json';

injectTapEventPlugin();

const muiTheme = createMuiTheme({
  palette: createPalette(theme.palette)
});

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <AppContainer config={config} style={{height: '1500px'}}>
      <Typography type='display2' className='text-center'>#main-content</Typography>
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
