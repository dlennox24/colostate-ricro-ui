import Portal from '@material-ui/core/Portal';
import Snackbar from '@material-ui/core/Snackbar';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Dropzone from 'react-dropzone';
import IconSnackbarContent from '../IconSnackbarContent';
import DropzoneRenderer from './DropzoneRenderer';
import styles from './styles';

class FileDropzoneComponent extends React.Component {
  state = {
    disabled: this.props.disabled || false,
    files: [],
    snackbar: {
      isOpen: false,
      variant: 'default',
      message: '',
    },
  };

  componentDidMount() {
    if (this.props.onLoadFunc) {
      this.props.onLoadFunc({
        handleRemove: this.handleRemoveFile.bind(this),
        handleUpload: this.handleUploadCheck,
      });
    }
  }

  handleDrop = files => {
    if (this.props.disabled) {
      return;
    }
    const { onFilesChange, maxFiles } = this.props;
    const { files: stateFiles } = this.state;
    if (maxFiles) {
      const numbExtra = maxFiles - (stateFiles.length + files.length);
      if (numbExtra < 0) {
        files.splice(numbExtra);
      }
      if (numbExtra < 1) {
        this.setState({ disabled: true });
      }
    }
    files = [...this.state.files, ...files];
    this.setState({ files });
    if (onFilesChange) {
      onFilesChange(files);
    }
  };

  handleRemoveFile = (fileIndex = -1) => () => {
    const { onFilesChange } = this.props;
    this.setState(state => {
      let files = [];
      if (fileIndex >= 0) {
        state.files.splice(fileIndex, 1);
        files = state.files;
      }
      if (onFilesChange) onFilesChange(files);
      return {
        disabled: false,
        files,
      };
    });
  };

  handleSnackbarClose = () => {
    this.setState({ snackbar: { open: false } });
  };

  handleUploadCheck = () => {
    if (typeof this.props.uploadFunc === 'function') {
      this.props.uploadFunc(this.state.files);
    } else if (this.props.axiosPath) {
      this.handleUploadFiles();
    } else {
      // eslint-disable-next-line no-console
      console.error('CRU-FileDropzone: `axiosPath` or `uploadFunc` must be set');
    }
  };

  handleUploadFiles = () => {
    const { api, axiosPath, axiosData } = this.props;
    const { onUploadAlwaysFunc, onUploadFailedFunc, onUploadSuccessFunc } = this.props;
    const formData = new FormData();
    this.state.files.forEach((file, i) => formData.append(i, file));
    if (axiosData) {
      Object.keys(axiosData).forEach(key => formData.append(key, axiosData[key]));
    }
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    api.axios
      .post(axiosPath, formData, config)
      .then(resp => {
        this.handleRemoveFile()();
        this.setState({
          snackbar: {
            isOpen: true,
            variant: 'success',
            message: _.get({ resp }, 'resp.data.result.message', 'File upload successful!'),
          },
        });
        if (onUploadSuccessFunc) onUploadSuccessFunc(resp);
      })
      .catch(err => {
        this.setState({
          snackbar: {
            isOpen: true,
            variant: 'error',
            message: _.get(
              { err },
              'err.response.data.result',
              'An error occured. File upload failed.',
            ),
          },
        });
        if (onUploadFailedFunc) onUploadFailedFunc(err);
      })
      .then(data => {
        if (onUploadAlwaysFunc) onUploadAlwaysFunc(data);
      });
  };

  render() {
    const { dropzoneProps, classes, className, ...other } = this.props;
    const { disabled, files, snackbar } = this.state;
    return (
      <div className={classNames(classes.root, className)}>
        <Dropzone disableClick {...dropzoneProps} onDrop={this.handleDrop}>
          {({ ...props }) => (
            <DropzoneRenderer
              files={files}
              onRemoveFile={this.handleRemoveFile}
              onUploadFiles={this.handleUploadCheck}
              disabled={disabled}
              {...props}
              {...other}
            />
          )}
        </Dropzone>
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
      </div>
    );
  }
}

FileDropzoneComponent.propTypes = {
  api: PropTypes.object.isRequired, // redux state
  axiosData: PropTypes.object,
  axiosPath: PropTypes.string,
  classes: PropTypes.object.isRequired, // MUI withStyles()
  className: PropTypes.string,
  disabled: PropTypes.bool,
  dropzoneProps: PropTypes.object,
  maxFiles: PropTypes.number,
  onFilesChange: PropTypes.func,
  onLoadFunc: PropTypes.func,
  onUploadAlwaysFunc: PropTypes.func,
  onUploadFailedFunc: PropTypes.func,
  onUploadFunc: PropTypes.func,
  onUploadSuccessFunc: PropTypes.func,
};

export default withStyles(styles)(FileDropzoneComponent);
