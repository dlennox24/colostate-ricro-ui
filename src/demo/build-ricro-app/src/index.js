import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {
  Route,
} from 'react-router-dom';

import App, {
  Dashboard,
  LoadMore
} from 'ricro-app-template';

import config from './config.json';
import SnackbarEx from './SnackbarEx';
import DialogEx from './DialogEx';
import SideNavEx from './SideNavEx';
import TypographyEx from './TypographyEx';

import {
  version,
  name as appName,
  dependencies,
  homepage,
} from '../package.json';
console.log(appName + '@' + version, '\n\tricro-app-template@' + dependencies['ricro-app-template']);

const style = {
  button: {
    margin: '8px'
  }
};

ReactDOM.render(
  <App config={config} homepage={homepage} sideNav={SideNavEx} reduxMiddleware={window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}>
        <Route path="/" exact component={
            ()=>(<div>
              <div className='row'>
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
            </div>)
          }
          />
        <Route path="/typography" exact component={TypographyEx}/>
  </App>,
  document.getElementById('root')
);
registerServiceWorker();
