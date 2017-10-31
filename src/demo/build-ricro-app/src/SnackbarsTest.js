import React, {
  Component,
} from 'react';
import {
  withStyles,
} from 'material-ui/styles';
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';

import CsuSnackbar from 'ricro-app-template/Snackbar';
import Dialog from 'ricro-app-template/Dialog';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});
const buttonStyle = {
  margin: '8px'
};

class SnackbarTest extends Component {
  state = {
    snackbarType: 'default',
    snackbarPos: 'default',
    snackbarSlide: 'default',
    snackbarAutoHide: 6e3,
    snackbar: false,
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

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
    const snackbarTypes = ['default', 'error', 'success', 'info', 'warning'];
    const snackbarSlide = ['default', 'left', 'right', 'up', 'down'];
    const snackbarPos = ['default', 'bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right', ];
    return (
      <div>
        <Typography type='display1'>Snackbars</Typography>
          <TextField
            id="select-snackbar-type"
            label="Type"
            className={classes.textField}
            value={this.state.snackbarType}
            onChange={this.handleChange('snackbarType')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            select
          >
            {snackbarTypes.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-snackbar-pos"
            label="Position"
            className={classes.textField}
            value={this.state.snackbarPos}
            onChange={this.handleChange('snackbarPos')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            select
          >
            {snackbarPos.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-snackbar-slide"
            label="Slide"
            className={classes.textField}
            value={this.state.snackbarSlide}
            onChange={this.handleChange('snackbarSlide')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            select
          >
            {snackbarSlide.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
          id="autoHideDuration"
          className={classes.textField}
          label="Autohide Duration"
          value={this.state.snackbarAutoHide}
          onChange={this.handleChange('snackbarAutoHide')}
          helperText="Milliseconds"
          type="number"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
          <TextField
            id="message"
            label="Message"
            className={classes.textField}
            onChange={this.handleChange('snackbarMessage')}
            margin="normal"
          />
        <Button
          style={buttonStyle}
          onClick={this.updateState.bind(this, 'snackbar', true)}
          raised
          >
          test snackbar
        </Button>
        <CsuSnackbar
          open={this.state.snackbar}
          type={this.state.snackbarType !== 'default' ? this.state.snackbarType : null}
          slideProps={this.state.snackbarSlide !== 'default' ? {direction: this.state.snackbarSlide} : null}
          message={this.state.snackbarMessage === '' || this.state.snackbarMessage == null ? 'This is a snackbar with the type: '+this.state.snackbarType : this.state.snackbarMessage}
          onRequestClose={this.updateState.bind(this, 'snackbar',false)}
          autoHideDuration={Number(this.state.snackbarAutoHide)}
          snackbarProps={this.state.snackbarPos === 'default' ? null : {
            anchorOrigin:{
              vertical: this.state.snackbarPos.split('-')[0],
              horizontal: this.state.snackbarPos.split('-')[1],
            }
          }}
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
