import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import IconAlert from 'mdi-material-ui/Alert';
import IconAlertCircle from 'mdi-material-ui/AlertCircle';
import IconCheckCircle from 'mdi-material-ui/CheckCircle';
import IconClose from 'mdi-material-ui/Close';
import IconInformation from 'mdi-material-ui/Information';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const variantIcon = {
  success: IconCheckCircle,
  warning: IconAlert,
  error: IconAlertCircle,
  info: IconInformation,
};

function IconSnackbarContent({
  classes,
  className,
  disableAction,
  disableIcon,
  icon,
  message,
  onClose,
  variant,
  ...other
}) {
  variant = variant === 'default' ? null : variant;
  const Icon = icon || variantIcon[variant];
  disableIcon = disableIcon || Icon == null;
  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="snackbar-content"
      message={
        <span id="snackbar-content" className={classes.message}>
          {!disableIcon && <Icon className={classNames(classes.icon, classes.iconVariant)} />}
          {message}
        </span>
      }
      action={
        !disableAction && [
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <IconClose className={classes.icon} />
          </IconButton>,
        ]
      }
      {...other}
    />
  );
}

IconSnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  className: PropTypes.string,
  disableAction: PropTypes.bool,
  disableIcon: PropTypes.bool,
  icon: PropTypes.func,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'info',
  ]),
};

export default withStyles(styles)(IconSnackbarContent);
