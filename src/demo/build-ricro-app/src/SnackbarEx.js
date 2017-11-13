import React, {
  Component
} from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import {
  withStyles,
} from 'material-ui/styles';

import {
  Snackbar,
  slideTransition,
} from 'ricro-app-template';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: 8,
  },
});

class SnackbarEx extends Component {
  state = {
    type: 'default',
    position: 'bottom-center',
    slide: 'up',
    autoHide: 6e3,
    message: '',
    snackbar: {
      open: false,
      transition: null,
    }
  };

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

  handleClick = (slideProps = {}) => () => {
    this.setState({
      snackbar: {
        open: true,
        transition: slideTransition.bind(this, slideProps),
      }
    });
  };

  render() {
    const classes = this.props.classes;
    const types = ['default', 'error', 'success', 'info', 'warning'];
    const slides = ['left', 'right', 'up', 'down'];
    const positions = ['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right', ];
    return (
      <div className="App">
        <Typography type='display1'>Snackbar</Typography>
        <TextField
          id='select-snackbar-type'
          label='Type'
          className={classes.textField}
          value={this.state.type}
          onChange={this.handleChange('type')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin='normal'
          select
          >
          {types.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='select-snackbar-pos'
          label='Position'
          className={classes.textField}
          value={this.state.position}
          onChange={this.handleChange('position')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin='normal'
          select
          >
          {positions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='select-snackbar-slide'
          label='Slide'
          className={classes.textField}
          value={this.state.slide}
          onChange={this.handleChange('slide')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin='normal'
          select
          >
          {slides.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='autoHideDuration'
          className={classes.textField}
          label='Autohide Duration'
          value={this.state.autoHide}
          onChange={this.handleChange('autoHide')}
          helperText='Milliseconds'
          type='number'
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          />
        <TextField
          id='message'
          label='Message'
          className={classes.textField}
          onChange={this.handleChange('message')}
          margin='normal'
          />
        <Button
          className={classes.button}
          onClick={this.handleClick({direction:this.state.slide})}
          raised
          >
          Open Snackbar
        </Button>
          <Snackbar
            state={this.state.snackbar}
            type={this.state.type !== 'default' ? this.state.type : null}
            onRequestClose={this.updateState.bind(this, 'snackbar',{...this.state.snackbar,open:false})}
            snackbarProps={{
              autoHideDuration: Number(this.state.autoHide),
              anchorOrigin: {
                vertical: this.state.position.split('-')[0],
                horizontal: this.state.position.split('-')[1],
              }
            }}
            >
            {this.state.message === '' || this.state.message == null ? 'This is a snackbar with the type: '+this.state.type : this.state.message}
          </Snackbar>
      </div>
    );
  }
}

export default withStyles(styles)(SnackbarEx);
