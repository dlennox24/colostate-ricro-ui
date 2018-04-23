import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  withStyles
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit + ' 0',
    overflow: 'hidden',
  },
  divider: {
    marginTop: theme.spacing.unit / 2,
  },
  padding: {
    padding: theme.spacing.unit * 2,
  },
  noPadding: {
    padding: 0,
  },
  row: {
    overflow: 'auto',
  },
  container: {
    margin: '0 auto',
  },
});

class SectionContainer extends Component {
  render() {
    const {
      children,
      classes,
      className,
      fullWidth,
      id,
      title,
      type,
      disablePadding,
    } = this.props;

    return (
      <div id={id ? id : title.toLowerCase().replace(/ /g,'-')} className={classnames(className,classes.root)}>
        <Typography variant={type ? type : 'display1'}>{title}</Typography>
        <Divider className={classes.divider}/>
        <div className={classes.row}>
          <Grid item md={fullWidth ? 12 : 8} className={classes.container}>
            <div className={disablePadding ? classes.noPadding : classes.padding}>
              {children}
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

SectionContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disablePadding: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default withStyles(styles)(SectionContainer);