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
        <Typography variant='display4'>display4</Typography>
        <Typography variant='display3'>display3</Typography>
        <Typography variant='display2'>display2</Typography>
        <Typography variant='display1'>display1</Typography>
        <Typography variant='headline'>headline</Typography>
        <Typography variant='title'>title</Typography>
        <Typography variant='subheading'>subheading</Typography>
        <Typography variant='body2'>body2</Typography>
        <Typography variant='body1'>body1</Typography>
        <Typography variant='caption'>caption</Typography>
        <Typography variant='button'>button</Typography>
        body text outside of any formatting tags (eg <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;i&gt;</code>, etc)
        <p>paragraph text with embeded <code>code text</code></p>
        <p>another paragraph with <a href='#test'>link text</a> in a sentence</p>
        <pre>{preString}</pre>
        <hr/>
        <div style={{padding: '10px',}}>
          <Button className={classes.button}>Default</Button>
          <Button className={classes.button} color='primary'>Primary</Button>
          <Button className={classes.button} color='secondary'>Secondary</Button>
          <Button className={classes.button} disabled>Disabled</Button>
          <Button className={classes.button} href='#'>Link</Button>
          <Button className={classes.button} size='small'>Dense</Button>
        </div>
        <div style={{padding: '10px',}}>
          <Button className={classes.button} variant='raised'>Default</Button>
          <Button className={classes.button} variant='raised' color='primary'>Primary</Button>
          <Button className={classes.button} variant='raised' color='secondary'>Secondary</Button>
          <Button className={classes.button} variant='raised' color='secondary' disabled>Disabled</Button>
          <input accept='jpg,jpeg,JPG,JPEG' style={{display: 'none'}} id='file' multiple type='file' />
          <label htmlFor='file'>
            <Button className={classes.button} variant='raised' component='span'>Upload</Button>
          </label>
          <Button className={classes.button} variant='raised' size='small'>Dense</Button>
        </div>
      </SectionContainer>
    );
  }
}

SideNavEx.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavEx);