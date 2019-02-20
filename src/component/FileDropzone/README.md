## FileDropzone

### Props

Any props not listed below will be spread to Material UI's `<Avatar>`.

*\* Required*

*\*\* Conditionally required*

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| api* | `object` | | Imported from the React Redux state
| axiosData | `object` | | Additional data to append to the xhr request of the files as `FormData` object
| axiosPath** | `string` | | Path to the API endpoint. Required only if `uploadFunc` is not passed. If both are passed `uploadFunc` takes priority.
| classes* | `string` | | Imported from Material UI's `withStyles()`
| className | `string` | | CSS class to apply to the components container
| disabled | `bool` | `false` | CSS class to apply to the components container
| dropzoneProps | `object` | | Props that are spread to the [react-dropzone](https://react-dropzone.js.org/) component. All props are overridable except `onDrop`. Use `onFilesChange` to catch when the internal list of files is changed (eg when a file is dropped, added, or removed).
| maxFiles | `number` | | Max number of files allowed. Once max is reached the dropzone is disabled. The user will have to remove or submit files to reenable the dropzone.
| onFilesChange | `func` | | Called when files are dropped, added, or removed and with one argument (an array of [File objects](https://developer.mozilla.org/en-US/docs/Web/API/Files)). Function signature should be something similar to `handleFileChange(files)`.
| onLoadFunc | `func` | | Returns an object with functions the functions `handleRemove` and `handleUpload`. `handleRemove` removes a file based on its index or all files if the index is `-1` or `null`. `handleUpload` initiates the upload of the files to the server.
| onUploadAlwaysFunc | `func` | | This function is always called with response from the axios call to the API.
| onUploadFailedFunc | `func` | | This function is called only if the axios request fails.
| onUploadSuccessFunc | `func` | | This function is called when the axios request succeeds.
| uploadFunc** | `func` | | Replaces the built in upload function. Required only if `axiosPath` is not passed. If both are passed `uploadFunc` takes priority.


### Example

```jsx
import withStyles from '@material-ui/core/styles/withStyles';
import { FileDropzone } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  root: { maxWidth: 800 },
});

class FileDropzonePage extends React.Component {
  getFiles = files => {
    // eslint-disable-next-line no-console
    console.log('getfiles', files);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FileDropzone
          axiosData={{ csuId: 999000333 }}
          axiosPath="/user/edit-profile-image/"
          dropzoneProps={{ accept: 'image/*' }}
          header="File Dropzone Example"
          helperText="Upload any image file"
          maxFiles={5}
          uploadFunc={this.getFiles}
        />
      </div>
    );
  }
}

FileDropzonePage.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
};

export default withStyles(styles)(FileDropzonePage);

```