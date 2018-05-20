import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Snackbar, slideTransition } from 'colostate-ricro-ui';

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

class SnackbarEx extends React.Component {
  state = {
    type: 'default',
    position: 'bottom-center',
    slide: 'up',
    autoHide: 6e3,
    message: '',
    snackbar: {
      open: false,
      transition: null,
    },
  };

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

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
      },
    });
  };

  render() {
    const { classes } = this.props;
    const types = ['default', 'error', 'success', 'info', 'warning'];
    const slides = ['left', 'right', 'up', 'down'];
    const positions = [
      'bottom-left',
      'bottom-center',
      'bottom-right',
      'top-left',
      'top-center',
      'top-right',
    ];
    const snackbarCode =
      `${'<Button' +
        '\n  className={classes.button}' +
        '\n  onClick={this.handleClick({direction: '}${this.state.slide}})}` +
      "\n  variant='raised'" +
      '\n  >' +
      '\n  Open Snackbar' +
      '\n</Button>' +
      '\n\n<Snackbar' +
      '\n  state={this.state.snackbar}' +
      `\n  type='${this.state.type}'` +
      "\n  onClose={this.updateState.bind(this, 'snackbar',{...this.state.snackbar,open:false})}" +
      '\n  snackbarProps={{' +
      `\n    autoHideDuration: ${Number(this.state.autoHide)},` +
      '\n    anchorOrigin: {' +
      `\n      vertical: ${this.state.position.split('-')[0]},` +
      `\n      horizontal: ${this.state.position.split('-')[1]},` +
      '\n    }' +
      '\n  }}' +
      `\n>\n  ${
        this.state.message === '' || this.state.message == null
          ? `This is a snackbar with the type: ${this.state.type}`
          : this.state.message
      }\n</Snackbar>`;
    return (
      <React.Fragment>
        <pre>{snackbarCode}</pre>
        <TextField
          id="select-snackbar-type"
          label="Type"
          className={classes.textField}
          value={this.state.type}
          onChange={this.handleChange('type')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          select
        >
          {types.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="select-snackbar-pos"
          label="Position"
          className={classes.textField}
          value={this.state.position}
          onChange={this.handleChange('position')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          select
        >
          {positions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="select-snackbar-slide"
          label="Slide"
          className={classes.textField}
          value={this.state.slide}
          onChange={this.handleChange('slide')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          select
        >
          {slides.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="autoHideDuration"
          className={classes.textField}
          label="Autohide Duration"
          value={this.state.autoHide}
          onChange={this.handleChange('autoHide')}
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
          onChange={this.handleChange('message')}
          margin="normal"
        />
        <Button
          className={classes.button}
          onClick={this.handleClick({ direction: this.state.slide })}
          variant="raised"
        >
          Open Snackbar
        </Button>
        <Snackbar
          state={this.state.snackbar}
          type={this.state.type !== 'default' ? this.state.type : null}
          onClose={this.updateState.bind(this, 'snackbar', { ...this.state.snackbar, open: false })}
          snackbarProps={{
            autoHideDuration: Number(this.state.autoHide),
            anchorOrigin: {
              vertical: this.state.position.split('-')[0],
              horizontal: this.state.position.split('-')[1],
            },
          }}
        >
          {this.state.message === '' || this.state.message == null
            ? `This is a snackbar with the type: ${this.state.type}`
            : this.state.message}
        </Snackbar>
      </React.Fragment>
    );
  }
}

SnackbarEx.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(SnackbarEx);
