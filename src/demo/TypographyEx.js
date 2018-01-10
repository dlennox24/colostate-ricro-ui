import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import SectionContainer from '../lib/components/SectionContainer';

const styles = theme => ({
  listRoot: {
    marginLeft: theme.spacing.unit * 5
  },
  button: {
    margin: 8,
  },
});

const preString = '// pre block\n' +
  'const styles = theme => ({\n' +
  '  listRoot: {\n' +
  '    marginLeft: theme.spacing.unit * 5\n' +
  '  },\n' +
  '});';

class SideNavEx extends Component {
  render() {
    const {
      classes
    } = this.props;

    return (
      <SectionContainer type='display2' title='Typography'>
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
        <a href=''>link text</a> body text outside of any formatting tags (eg <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;i&gt;</code>, etc)
        <p>paragraph text with embeded <code>code text</code></p>
        <p>another paragraph</p>
        <pre>{preString}</pre>
        <hr/>
        <div style={{background: 'whitesmoke', padding: '10px',}}>
          <Button className={classes.button}>Default</Button>
          <Button className={classes.button} color='primary'>Primary</Button>
          <Button className={classes.button} color='accent'>Accent</Button>
          <Button className={classes.button} color='contrast'>Contrast</Button>
          <Button className={classes.button} disabled>Disabled</Button>
          <Button className={classes.button} href='#'>Link</Button>
          <Button className={classes.button} dense>Dense</Button>
        </div>
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
      </SectionContainer>
    );
  }
}

SideNavEx.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavEx);