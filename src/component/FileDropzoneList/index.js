import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconDelete from 'mdi-material-ui/Delete';
import PropTypes from 'prop-types';
import React from 'react';
import toFileSizeString from '../../utils/toFileSizeString';
import FileImagePreview from './FileImagePrevew';

const styles = () => ({
  root: { padding: '0 1.5rem 1.5rem 1.5rem' },
  noFiles: { textAlign: 'center' },
});

// eslint-disable-next-line
const FileDropzoneList = props => {
  const { classes, className, files, onRemoveFile } = props;
  return (
    <div className={className}>
      {files.length < 1 ? (
        <Typography className={classes.noFiles} variant="button">
          Add or drop files to upload
        </Typography>
      ) : (
        <List dense>
          {files.map((file, i) => {
            const secondaryText = `${toFileSizeString(file.size)} - ${new Date(
              file.lastModified,
            ).toLocaleString()}`;
            return (
              <ListItem divider={files.length - 1 !== i} key={file.name}>
                {file.type.match(/image\/.*/g) && <FileImagePreview file={file} />}
                <ListItemText
                  primary={
                    <Tooltip title={file.name}>
                      <span>{file.name}</span>
                    </Tooltip>
                  }
                  secondary={
                    <Tooltip title={secondaryText}>
                      <span>{secondaryText}</span>
                    </Tooltip>
                  }
                  primaryTypographyProps={{ noWrap: true }}
                  secondaryTypographyProps={{ noWrap: true }}
                />
                <ListItemSecondaryAction>
                  <Tooltip title={`Remove file: ${file.name}`}>
                    <IconButton aria-label={`Remove file: ${file.name}`} onClick={onRemoveFile(i)}>
                      <IconDelete />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
};

FileDropzoneList.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  className: PropTypes.string,
  files: PropTypes.array,
  onRemoveFile: PropTypes.func.isRequired,
};

export default withStyles(styles)(FileDropzoneList);
