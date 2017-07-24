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
import Button from 'material-ui/Button';

import AppContainer from './csu-app-template/AppContainer';
import CsuDashboard from './csu-app-template/CsuDashboard';
import config from './config.json';
import theme from './csu-app-template/theme.json';

injectTapEventPlugin();

const muiTheme = createMuiTheme({
  palette: createPalette(theme.palette)
});

const style = {
  button: {
    margin: '8px'
  }
};

const user = {
  "eId": 800900100,
  "first_name": "first_name",
  "last_name": "last_name",
  "email": "email@colostate.edu",
  "profile_image": "string",
  "last_active": "2017-07-24T18:39:13Z",
  "userGroups": [{
    "user_group_type_id": 0,
    "name": "string",
    "alias": "string",
    "description": "string"
  }]
};

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <AppContainer config={config} user={user}>
      <div className='row'>
        <div className='col-md-5'>
          <CsuDashboard
            title='Typography'
            >
            <Typography type='display4'>display4</Typography>
            <Typography type='display3'>display3</Typography>
            <Typography type='display2'>display2</Typography>
            <Typography type='display1'>display1</Typography>
            <Typography type='headline'>headline</Typography>
            <Typography type='title'>title</Typography>
            <Typography type='subheading'>subheading</Typography>
            <Typography type='body2'>body2</Typography>
            <Typography type='body1'>body1</Typography>
            <Typography type='caption'>caption</Typography>
            <Typography type='button'>button</Typography>
          </CsuDashboard>
        </div>
        <div className='col-md-7'>
          <CsuDashboard
            title='Buttons'
            >
            <Typography type='display1'>Flat Buttons</Typography>
            <div style={{background: 'whitesmoke', padding: '10px',}}>
              <Button style={style.button}>Default</Button>
              <Button style={style.button} color="primary">Primary</Button>
              <Button style={style.button} color="accent">Accent</Button>
              <Button style={style.button} color="contrast">Contrast</Button>
              <Button style={style.button} disabled>Disabled</Button>
              <Button style={style.button} href="#">Link</Button>
              <Button style={style.button} dense>Dense</Button>
            </div>
            <Typography type='display1'>Raised Buttons</Typography>
            <div style={{background: 'whitesmoke', padding: '10px',}}>
              <Button style={style.button} raised>Default</Button>
              <Button style={style.button} raised color="primary">Primary</Button>
              <Button style={style.button} raised color="accent">Accent</Button>
              <Button style={style.button} raised color="contrast">Contrast</Button>
              <Button style={style.button} raised color="accent" disabled>Disabled</Button>
              <input accept="jpg,jpeg,JPG,JPEG" style={{display: 'none'}} id="file" multiple type="file" />
              <label htmlFor="file">
                <Button style={style.button} raised component="span">Upload</Button>
              </label>
              <Button style={style.button} raised dense>Dense</Button>
            </div>
          </CsuDashboard>
        </div>
      </div>
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
