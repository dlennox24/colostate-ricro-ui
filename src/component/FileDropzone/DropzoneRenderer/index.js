import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import IconFileAlert from 'mdi-material-ui/FileAlert';
import IconFileUpload from 'mdi-material-ui/FileUpload';
import IconMinusCircle from 'mdi-material-ui/MinusCircle';
import PropTypes from 'prop-types';
import React from 'react';
import DefaultDropzoneRenderer from '../../../core/DefaultDropzoneRenderer';
import styles from './styles';

class DropzoneRenderer extends React.Component {
  getDragObj = () => {
    const { classes, disabled = false, disabledText = 'Disabled', isDragReject } = this.props;

    let className = isDragReject ? classes.dragReject : classes.dragAccept;
    let icon = isDragReject ? <IconFileAlert /> : <IconFileUpload />;
    let text = isDragReject ? 'Invalid file(s)' : 'Drop to upload file';

    if (disabled) {
      className = classes.dragDisable;
      icon = <IconMinusCircle />;
      text = disabledText;
    }

    return { className, icon, text };
  };

  render() {
    const {
      children: RenderFunc,
      classes,
      dragRootClassName,
      getInputProps,
      getRootProps,
      isDragActive,
    } = this.props;

    const drag = this.getDragObj();
    const passableProps = { ...this.props };
    passableProps.classes = null;

    return (
      <div {...getRootProps({ className: classes.root })}>
        <input {...getInputProps()} />
        {isDragActive && (
          <div className={classNames(classes.dragRoot, drag.className, dragRootClassName)}>
            <Typography color="inherit" component="div" className={classes.dragIconContainer}>
              {drag.icon}
            </Typography>
            <Typography color="inherit" component="div" variant="h6">
              {drag.text}
            </Typography>
          </div>
        )}
        <div className={classNames(isDragActive && classes.blur)}>
          {RenderFunc ? (
            <RenderFunc {...passableProps} />
          ) : (
            <DefaultDropzoneRenderer {...passableProps} />
          )}
        </div>
      </div>
    );
  }
}
DropzoneRenderer.propTypes = {
  children: PropTypes.func,
  classes: PropTypes.object.isRequired, // MUI withStyles()
  disabled: PropTypes.bool,
  disabledText: PropTypes.string,
  dragRootClassName: PropTypes.string,
  header: PropTypes.string,
  helperText: PropTypes.node,
};

export default withStyles(styles)(DropzoneRenderer);
