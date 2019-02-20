import { Collapse } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import _ from 'lodash';
import IconPencil from 'mdi-material-ui/Pencil';
import PropTypes from 'prop-types';
import React from 'react';
import userDefaultProfileImg from '../../../assets/img/default-profile.svg';
import { userShape } from '../../../assets/propTypes';
import FileDropzone from '../../../component/FileDropzone';
import FileDropzoneList from '../../../component/FileDropzoneList';
import styles from './styles';

class ProfileImage extends React.Component {
  state = {
    dropzoneFunc: {},
    files: [],
  };

  handleUpdateFiles = files => {
    this.setState({ files });
  };

  handleLoadDropzoneFunc = funcs => {
    this.setState({ dropzoneFunc: funcs });
  };

  handleUploadSuccess = apiResp => {
    this.props.handleReduxUpdateProfileImage(apiResp.data.result.newPath);
  };

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { api, classes, loggedInUserId, user } = this.props;
    const { dropzoneFunc, files } = this.state;
    const image = (
      <img
        className={classes.profileImage}
        src={user.profileImage ? api.host + user.profileImage : userDefaultProfileImg}
        alt={user.displayName}
      />
    );
    return user.csuId !== loggedInUserId ? (
      image
    ) : (
      <React.Fragment>
        <FileDropzone
          axiosData={{ csuId: user.csuId }}
          axiosPath={api.editProfileImagePath}
          dragRootClassName={classes.dragRoot}
          dropzoneProps={{
            accept: 'image/jpeg',
            multiple: false,
            disableClick: false,
          }}
          maxFiles={1}
          onFilesChange={this.handleUpdateFiles}
          onLoadFunc={this.handleLoadDropzoneFunc}
          onUploadSuccessFunc={this.handleUploadSuccess}
        >
          {() => (
            <div className={classNames(files.length < 1 && classes.editImageContainer)}>
              {files.length < 1 && (
                <div className={classes.profileImageEdit}>
                  <Typography color="inherit" component="div" className={classes.dragIconContainer}>
                    <IconPencil />
                  </Typography>
                  <Typography color="inherit" component="div" variant="h6">
                    Edit Image
                  </Typography>
                </div>
              )}
              <div className={classes.profileImageCover}>{image}</div>
            </div>
          )}
        </FileDropzone>
        {!_.isEmpty(dropzoneFunc) && (
          <Collapse className={classes.fileListContainer} in={files.length > 0}>
            <FileDropzoneList files={files} onRemoveFile={dropzoneFunc.handleRemove} />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={dropzoneFunc.handleUpload}
            >
              Update Profile Image
            </Button>
          </Collapse>
        )}
        <Collapse in={files.length < 1}>
          <Typography className={classes.uploadInstructions} variant="caption">
            Click the image above or drag and drop an image file to change the profile image. Images
            must be square and of the type <code>.jpg</code>.
          </Typography>
        </Collapse>
      </React.Fragment>
    );
  }
}

ProfileImage.propTypes = {
  api: PropTypes.object.isRequired, // redux state
  classes: PropTypes.object.isRequired, // MUI withStyles()
  handleReduxUpdateProfileImage: PropTypes.func.isRequired, // redux dispatch
  loggedInUserId: PropTypes.number.isRequired, // redux state
  user: userShape.isRequired,
};

export default withStyles(styles)(ProfileImage);
