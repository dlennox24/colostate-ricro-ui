import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = () => ({
  dialogTitleRoot: {
    padding: 0,
  },
  dialogRoot: {
    width: '100%',
  },
  dialogContent: {
    padding: 24,
  },
  flex: {
    flex: 1,
  },
});

const CsuDialog = props => {
  const { children, classes, dialogActions, dialogProps, fullScreen, open, onClose, title } = props;
  return (
    <Dialog
      classes={{ paper: classes.dialogRoot }}
      fullScreen={fullScreen}
      open={open || false}
      onClose={onClose}
      maxWidth="md"
      {...dialogProps}
    >
      <DialogTitle
        classes={{
          root: classes.dialogTitleRoot,
        }}
        disableTypography
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
            <div className={classes.flex} />
            <IconButton onClick={onClose} color="inherit" aria-label="Close">
              <Icon>close</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
      </DialogTitle>
      <DialogContent classes={{ root: classes.dialogContent }}>{children}</DialogContent>
      {dialogActions != null ? <DialogActions>{dialogActions}</DialogActions> : null}
    </Dialog>
  );
};

CsuDialog.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
  dialogActions: PropTypes.node,
  dialogProps: PropTypes.object,
  fullScreen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  title: PropTypes.string,
};

export default withStyles(styles)(withMobileDialog()(CsuDialog));
