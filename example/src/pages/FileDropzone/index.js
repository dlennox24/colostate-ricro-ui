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
