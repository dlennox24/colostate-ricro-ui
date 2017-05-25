import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AppContainer from './csu-app-template/AppContainer';
import config from './config.json';

import {
  ToolbarTitle,
  ToolbarGroup
} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
const header = [
  <ToolbarTitle key={0} text={'test'} />,
  (<ToolbarGroup key={1}>
        <IconButton
          href={'\\test'}
          tooltip='Contact Us'
          tooltipPosition='bottom-left'>
          <FontIcon className='material-icons'>email</FontIcon>
        </IconButton>
      </ToolbarGroup>)
];

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(config.muiTheme)}>
    <AppContainer config={config} header={header} style={{border: '3px solid red', height: '1500px'}}>
      <h2 className='text-center'>#main-content</h2>
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('root')
);
