import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import {
  Dashboard,
  LoadMore
} from 'ricro-app-template';

import SnackbarEx from './SnackbarEx';
import DialogEx from './DialogEx';

const styles = theme => ({
  listRoot: {
    marginLeft: theme.spacing.unit * 5
  },
  button: {
    margin: 8,
  },
});

class SideNavEx extends Component {
  render() {
    const {
      classes
    } = this.props;
    return (
      <div>
        <div className='row'>
          <div className='col-md-7'>
            <Dashboard title='Buttons'>
              <Typography type='display1'>Flat Buttons</Typography>
              <div style={{background: 'whitesmoke', padding: '10px',}}>
                <Button className={classes.button}>Default</Button>
                <Button className={classes.button} color='primary'>Primary</Button>
                <Button className={classes.button} color='accent'>Accent</Button>
                <Button className={classes.button} color='contrast'>Contrast</Button>
                <Button className={classes.button} disabled>Disabled</Button>
                <Button className={classes.button} href='#'>Link</Button>
                <Button className={classes.button} dense>Dense</Button>
              </div>
              <Typography className='mt-3' type='display1'>Raised Buttons</Typography>
              <hr className='my-2'/>
              <div style={{background: 'whitesmoke', padding: '10px',}}>
                <Button className={classes.button} raised>Default</Button>
                <Button className={classes.button} raised color='primary'>Primary</Button>
                <Button className={classes.button} raised color='accent'>Accent</Button>
                <Button className={classes.button} raised color='contrast'>Contrast</Button>
                <Button className={classes.button} raised color='accent' disabled>Disabled</Button>
                <input accept='jpg,jpeg,JPG,JPEG' style={{display: 'none'}} id='file' multiple type='file' />
                <label htmlFor='file'>
                  <Button className={classes.button} raised component='span'>Upload</Button>
                </label>
                <Button className={classes.button} raised dense>Dense</Button>
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
      </div>
    );
  }
}

SideNavEx.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavEx);
