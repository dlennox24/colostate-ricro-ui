import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  listRoot: {
    marginLeft: theme.spacing.unit * 5
  },
});

class SideNavEx extends Component {
  render() {
    return (
      <div>
        <Typography type='display2'>Typography</Typography>
        <hr/>
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
      </div>
    );
  }
}

SideNavEx.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavEx);
