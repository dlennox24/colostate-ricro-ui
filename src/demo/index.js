import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import App from '../lib/App';
import Dashboard from '../lib/Dashboard';
import LoadMore from '../lib/LoadMore';

import config from './config.json';
import SnackbarEx from './SnackbarEx';
import DialogEx from './DialogEx';

import {
  version,
  name as appName
} from '../../package.json';
console.log(appName + '@' + version);

const style = {
  button: {
    margin: '8px'
  }
};

ReactDOM.render(
  <App config={config} reduxMiddleware={window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}>
    <div className='row'>
      <div className='col-md-5'>
        <Dashboard title='Typography'>
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
          <a href=''>link text</a>
          <p>paragraph text</p>
          body text
        </Dashboard>
      </div>
      <div className='col-md-7'>
        <Dashboard title='Buttons'>
          <Typography type='display1'>Flat Buttons</Typography>
          <div style={{background: 'whitesmoke', padding: '10px',}}>
            <Button style={style.button}>Default</Button>
            <Button style={style.button} color='primary'>Primary</Button>
            <Button style={style.button} color='accent'>Accent</Button>
            <Button style={style.button} color='contrast'>Contrast</Button>
            <Button style={style.button} disabled>Disabled</Button>
            <Button style={style.button} href='#'>Link</Button>
            <Button style={style.button} dense>Dense</Button>
          </div>
          <Typography className='mt-3' type='display1'>Raised Buttons</Typography>
          <hr className='my-2'/>
          <div style={{background: 'whitesmoke', padding: '10px',}}>
            <Button style={style.button} raised>Default</Button>
            <Button style={style.button} raised color='primary'>Primary</Button>
            <Button style={style.button} raised color='accent'>Accent</Button>
            <Button style={style.button} raised color='contrast'>Contrast</Button>
            <Button style={style.button} raised color='accent' disabled>Disabled</Button>
            <input accept='jpg,jpeg,JPG,JPEG' style={{display: 'none'}} id='file' multiple type='file' />
            <label htmlFor='file'>
              <Button style={style.button} raised component='span'>Upload</Button>
            </label>
            <Button style={style.button} raised dense>Dense</Button>
          </div>
        </Dashboard>
      </div>
    </div>
    <div className='row mt-4'>
      <div className='col-md-7'>
        <Dashboard title='Other Components'>
          <SnackbarEx/>
          <DialogEx/>
          <Typography className='mt-3' type='display1'>LoadingMore</Typography>
          <LoadMore />
        </Dashboard>
      </div>
    </div>
  </App>,
  document.getElementById('root')
);
registerServiceWorker();