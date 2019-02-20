import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Portal from '@material-ui/core/Portal';
import Snackbar from '@material-ui/core/Snackbar';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import IconCheck from 'mdi-material-ui/Check';
import IconClose from 'mdi-material-ui/Close';
import PropTypes from 'prop-types';
import React from 'react';
import IconSnackbarContent from '../../../../component/IconSnackbarContent';

const styles = theme => ({
  editDisplayName: { marginTop: theme.spacing.unit },
});

class EditProfileDisplayName extends React.Component {
  state = {
    newDisplayName: '',
    snackbar: {
      isOpen: false,
      variant: 'default',
      message: '',
    },
  };

  handleChange = event => {
    const newDisplayName = event.target.value;
    this.setState({ newDisplayName });
  };

  handleSubmit = () => {
    const { api, handleReduxUpdateDisplayName, onToggleOpen, user } = this.props;
    const { newDisplayName } = this.state;
    api.axios
      .post(api.editDisplayNamePath, `csuId=${user.csuId}&displayName=${newDisplayName}`)
      .then(() => {
        this.setState({
          snackbar: {
            isOpen: true,
            variant: 'success',
            message: 'Successfully updated display name',
          },
        });
        handleReduxUpdateDisplayName(newDisplayName);
        onToggleOpen();
      })
      .catch(err => {
        this.setState({
          snackbar: {
            isOpen: true,
            variant: 'error',
            message: err.response.data.result,
          },
        });
      });
  };

  handleSnackbarClose = () => {
    this.setState({ snackbar: { isOpen: false } });
  };

  getInputProps = () => {
    const { onToggleOpen } = this.props;
    const { newDisplayName } = this.state;
    return {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            disabled={newDisplayName.trim().length < 3}
            aria-label="Close edit display name"
            onClick={this.handleSubmit}
          >
            <IconCheck />
          </IconButton>
          <IconButton aria-label="Close edit display name" onClick={onToggleOpen}>
            <IconClose />
          </IconButton>
        </InputAdornment>
      ),
    };
  };

  render() {
    const { classes, user } = this.props;
    const { newDisplayName, snackbar } = this.state;
    const inputProps = this.getInputProps();
    return (
      <React.Fragment>
        <TextField
          autoFocus
          className={classes.editDisplayName}
          error={newDisplayName.length < 3 && newDisplayName.length !== 0}
          fullWidth
          helperText="Must be at least 3 charaters. Using both first and last name is recommended."
          id="edit-display-name"
          InputProps={inputProps}
          label="Display Name"
          margin="normal"
          onChange={this.handleChange}
          placeholder={user.displayName}
          value={newDisplayName}
          variant="outlined"
        />
        <Portal>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={snackbar.isOpen}
            autoHideDuration={6000}
            onClose={this.handleSnackbarClose}
          >
            <IconSnackbarContent
              variant={snackbar.variant}
              onClose={this.handleSnackbarClose}
              message={snackbar.message}
              disableAction
            />
          </Snackbar>
        </Portal>
      </React.Fragment>
    );
  }
}

EditProfileDisplayName.propTypes = {
  api: PropTypes.object.isRequired, // redux state
  classes: PropTypes.object.isRequired, // MUI withStyles()
  handleReduxUpdateDisplayName: PropTypes.func.isRequired, // redux dispatch
  onToggleOpen: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfileDisplayName);
