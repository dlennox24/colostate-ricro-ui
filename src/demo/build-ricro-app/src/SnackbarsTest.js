import React, {
  Component,
} from 'react';
import {
  withStyles,
} from 'material-ui/styles';
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';

import {
  Snackbar,
  Dialog
} from 'ricro-app-template';

const styles = theme => ({
  errorButton: {
    color: 'white',
    backgroundColor: theme.palette.alerts.danger
  },
  successButton: {
    color: 'white',
    backgroundColor: theme.palette.alerts.success
  },
  warningButton: {
    // color: 'white',
    backgroundColor: theme.palette.alerts.warning
  },
  infoButton: {
    color: 'white',
    backgroundColor: theme.palette.alerts.info
  },
});
const buttonStyle = {
  margin: '8px'
};

class SnackbarTest extends Component {
  state = {
    snackbars: {
      default: false,
      error: false,
      success: false,
      info: false,
      warning: false,
      topCenter: false,
    },
    dialogs: {
      default: false,
    },
  }

  onDialogClose = type => {
    type = typeof type !== 'string' ? 'default' : type;
    this.setState({
      dialogs: {
        ...this.state.dialogs,
        [type]: false,
      }
    });
  }

  onDialogOpen = type => {
    this.setState({
      dialogs: {
        ...this.state.dialogs,
        [type]: true,
      }
    });
  }

  onRequestClose = type => {
    console.log('close: ' + type);
    this.setState({
      snackbars: {
        ...this.state.snackbars,
        [type]: false,
      }
    });
  }
  onRequestOpen = type => {
    console.log('open: ' + type);
    this.setState({
      snackbars: {
        ...this.state.snackbars,
        [type]: true,
      }
    });
  }

  render() {
    let classes = this.props.classes;
    const dialogActions = [
      <Button onClick={this.onDialogClose} color="primary" key={0}>
        Disagree
      </Button>,
      <Button onClick={this.onDialogClose} color="primary" raised key={1}>
        Agree
      </Button>,
    ];
    return (
      <div>
        <Typography type='display1'>Snackbars</Typography>
        <Button
          style={buttonStyle}
          className={classes.defaultButton}
          onClick={this.onRequestOpen.bind(this, 'default')}
          raised
          >
          default
        </Button>
        <Snackbar
          open={this.state.snackbars.default}
          message='Default snackbar'
          onRequestClose={this.onRequestClose.bind(this, 'default')}
          />
        <Button
          style={buttonStyle}
          className={classes.errorButton}
          onClick={this.onRequestOpen.bind(this, 'error')}
          raised
          >
          error
        </Button>
        <Snackbar
          open={this.state.snackbars.error}
          message='Default snackbar'
          onRequestClose={this.onRequestClose.bind(this, 'error')}
          type='error'
          snackbarProps={{
            anchorOrigin:{
              vertical: 'bottom',
              horizontal: 'right',
            },
            transition:<Slide direction='left' />}
          }
          />
        <Button
          style={buttonStyle}
          className={classes.successButton}
          onClick={this.onRequestOpen.bind(this, 'success')}
          id='snackbar-success'
          raised
          >
          success
        </Button>
        <Snackbar
          id='success'
          open={this.state.snackbars.success}
          message='Success snackbar'
          onRequestClose={this.onRequestClose.bind(this,'success')}
          type='success'
          snackbarProps={{
            anchorOrigin:{
              vertical: 'top',
              horizontal: 'right',
            },
            transition:<Slide direction='left' />}
          }
          />
        <Button
          style={buttonStyle}
          className={classes.warningButton}
          onClick={this.onRequestOpen.bind(this, 'warning')}
          id='snackbar-warning'
          raised
          >
          warning
        </Button>
        <Snackbar
          id='warning'
          open={this.state.snackbars.warning}
          message='Warning snackbar'
          onRequestClose={this.onRequestClose.bind(this,'warning')}
          type='warning'
          snackbarProps={{
            anchorOrigin:{
              vertical: 'top',
              horizontal: 'left',
            },
            transition:<Slide direction='right' />}
          }
          />
        <Button
          style={buttonStyle}
          className={classes.infoButton}
          onClick={this.onRequestOpen.bind(this, 'info')}
          id='snackbar-info'
          raised
          >
          info
        </Button>
        <Snackbar
          id='info'
          open={this.state.snackbars.info}
          message='Info snackbar'
          onRequestClose={this.onRequestClose.bind(this,'info')}
          type='info'
          snackbarProps={{
            anchorOrigin:{
              vertical: 'bottom',
              horizontal: 'center',
            },
            transition:<Slide direction='up' />}
          }
          />
        <Button
          style={buttonStyle}
          className={classes.topCenterButton}
          onClick={this.onRequestOpen.bind(this, 'topCenter')}
          id='snackbar-topCenter'
          raised
          >
          top-center
        </Button>
        <Snackbar
          id='topCenter'
          open={this.state.snackbars.topCenter}
          message='Top-center snackbar'
          onRequestClose={this.onRequestClose.bind(this,'topCenter')}
          snackbarProps={{
            anchorOrigin:{
              vertical: 'top',
              horizontal: 'center',
            },
            transition:<Slide direction='down' />}
          }
          />
        <Typography type='display1'>Dialogs</Typography>
        <Button
          style={buttonStyle}
          className={classes.defaultButton}
          onClick={this.onDialogOpen.bind(this, 'default')}
          raised
          >
          Dialog
        </Button>
        <Dialog
          title="Test Dialog Title"
          onRequestClose={this.onDialogClose.bind(this, 'default')}
          open={this.state.dialogs.default}
          dialogActions={dialogActions}
          >
          body
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SnackbarTest);
