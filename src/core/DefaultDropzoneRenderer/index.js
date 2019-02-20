import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import FileDropzoneList from '../../component/FileDropzoneList';
import DDZAppbar from './DDZAppbar';

const styles = () => ({
  helperText: { textAlign: 'center' },
  paper: {
    maxHeight: 350,
    overflowY: 'auto',
    padding: '1.5rem',
  },
});

const DefaultDropzoneRenderer = props => {
  const { classes, helperText, files, onRemoveFile } = props;
  const passableProps = { ...props };
  passableProps.classes = null;

  return (
    <Paper>
      <DDZAppbar {...passableProps} />
      <div className={classes.paper}>
        {helperText && (
          <Typography className={classes.helperText} paragraph variant="body2">
            {helperText}
          </Typography>
        )}
        <FileDropzoneList files={files} onRemoveFile={onRemoveFile} />
      </div>
    </Paper>
  );
};
DefaultDropzoneRenderer.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  files: PropTypes.array,
  helperText: PropTypes.node,
  onRemoveFiles: PropTypes.func,
};

export default withStyles(styles)(DefaultDropzoneRenderer);
