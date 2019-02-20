import { AppBar, Toolbar, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import IconDeleteSweep from 'mdi-material-ui/DeleteSweep';
import IconPlus from 'mdi-material-ui/Plus';
import IconUpload from 'mdi-material-ui/Upload';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  fileListHeader: { flexGrow: 1 },
});

const DDZAppbar = ({
  classes,
  disabled,
  files,
  onRemoveFile,
  onUploadFiles,
  header = 'Upload Files',
  open,
}) => (
  <AppBar color="default" component="div" elevation={0} position="static">
    <Toolbar>
      <Typography className={classes.fileListHeader} variant="h6">
        {header}
      </Typography>
      <Tooltip title={disabled ? 'Adding files is disabled' : 'Add file'}>
        <div>
          <IconButton aria-label="Add file" disabled={disabled} onClick={open}>
            <IconPlus />
          </IconButton>
        </div>
      </Tooltip>
      {files.length > 0 && (
        <Tooltip title="Upload files">
          <IconButton aria-label="Upload files" onClick={onUploadFiles}>
            <IconUpload />
          </IconButton>
        </Tooltip>
      )}
      {files.length > 1 && (
        <Tooltip title="Remove all files">
          <IconButton aria-label="Remove all files" onClick={onRemoveFile()}>
            <IconDeleteSweep />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  </AppBar>
);

DDZAppbar.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  files: PropTypes.array.isRequired,
  header: PropTypes.string,
  onRemoveFile: PropTypes.func.isRequired,
  onUploadFiles: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};

export default withStyles(styles)(DDZAppbar);
