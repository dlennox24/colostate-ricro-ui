import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  success: {
    '&>div': {
      backgroundColor: theme.palette.alerts.success,
    },
  },
  error: {
    '&>div': {
      backgroundColor: theme.palette.alerts.danger,
    },
  },
  warning: {
    '&>div': {
      color: 'black',
      backgroundColor: theme.palette.alerts.warning,
    },
  },
  info: {
    '&>div': {
      backgroundColor: theme.palette.alerts.info,
    },
  },
  default: {
    '&>div': {},
  },
  icon: {
    paddingRight: '5px',
  },
});

export function slideTransition(slideProps, props) {
  props = {
    ...props,
    direction: 'up',
    ...slideProps,
  };
  return <Slide {...props}/>;
}

class CsuSnackbar extends Component {
  render() {
    const classes = this.props.classes;
    let icon;
    switch (this.props.type) {
      case 'error':
        icon = 'close';
        break;
      case 'success':
        icon = 'done';
        break;
      case 'info':
        icon = 'info_outline';
        break;
      case 'warning':
        icon = 'warning';
        break;
      default:
        icon = null;
    }
    const message = (
      <div className='row align-items-center'>
          {!this.props.noIcon ? <Icon className={classes.icon}>{icon}</Icon> : null}
          {this.props.children}
      </div>
    );

    let autohide = this.props.autoHideDuration;
    if (this.props.autoHideDuration === 0) {
      autohide = undefined;
    } else if (this.props.autoHideDuration == null) {
      autohide = 6e3; // Default: 6000ms
    }

    return (
      <Snackbar
        classes={{root: classes[this.props.type ? this.props.type : 'default']}}
        open={this.props.state.open}
        autoHideDuration={autohide}
        onRequestClose={this.props.onRequestClose}
        transition={this.props.state.transition}
        SnackbarContentProps={{
          'aria-describedby': 'message',
        }}
        message={<span id='message'>{message}</span>}
        { ...this.props.snackbarProps}
        />
    );
  }
}

CsuSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'error', 'success', 'info', 'warning']),
  snackbarProps: PropTypes.object,
  noIcon: PropTypes.bool,
};

export default withStyles(styles)(CsuSnackbar);
