import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const CloseableDialog = ({
  children,
  classes,
  fullScreen,
  header,
  ModalProps,
  onClose,
  headerColor = 'primary',
  ...dialogProps
}) => {
  const id = `${header.replace(/ /g, '-').toLowerCase()}-header-dialog`;
  return (
    <Dialog
      classes={{ paper: classes.dialogRoot }}
      fullScreen={fullScreen}
      maxWidth="lg"
      onClose={onClose}
      fullWidth
      aria-labelledby={id}
      {...dialogProps}
    >
      <DialogTitle
        classes={{
          root: classes.dialogTitleRoot,
        }}
        disableTypography
      >
        <AppBar position="static" component="div" color={headerColor}>
          <Toolbar>
            <Typography id={id} variant="h5" color="inherit">
              {header}
            </Typography>
            <div className={classes.flex} />
            <IconButton onClick={onClose} color="inherit" aria-label="Close">
              <Icon>
                <FontAwesomeIcon icon={faTimes} />
              </Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

CloseableDialog.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
  dialogProps: PropTypes.object,
  fullScreen: PropTypes.bool.isRequired, // withMobileDialog()
  header: PropTypes.string,
  headerColor: PropTypes.string,
  ModalProps: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(withMobileDialog()(CloseableDialog));
