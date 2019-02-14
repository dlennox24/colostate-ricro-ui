import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import React from 'react';

const size = 60;
const styles = () => ({
  avatar: {
    height: size,
    width: size,
    // '& > img': {
    //   height: size,
    //   width: size,
    // },
  },
});

class FileImagePreview extends React.Component {
  componentWillMount() {
    this.props.file.preview = URL.createObjectURL(this.props.file);
  }

  componentWillUnmount() {
    URL.revokeObjectURL(this.props.file.preview);
  }

  render() {
    const { classes, file } = this.props;
    return (
      <ListItemAvatar>
        <Avatar alt={`File: ${file.name}`} className={classes.avatar} src={file.preview} />
      </ListItemAvatar>
    );
  }
}

FileImagePreview.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  file: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileImagePreview);
