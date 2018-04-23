import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
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

const styles = theme => ({
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

class CsuDialog extends Component {
  render() {
    const {
      classes,
      fullScreen,
      onClose,
    } = this.props;
    return (
      <Dialog
        classes={{paper: classes.dialogRoot}}
        fullScreen={fullScreen}
        open={this.props.open || false}
        onClose={onClose}
        maxWidth='md'
        {...this.props.dialogProps}
        >
        <DialogTitle
          classes={{
            root: classes.dialogTitleRoot
          }}
          disableTypography
          >
          <AppBar position='static'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                {this.props.title}
              </Typography>
              <div className={classes.flex}/>
              <IconButton
                onClick={onClose}
                color='inherit'
                aria-label='Close'
                >
                <Icon>close</Icon>
              </IconButton>
            </Toolbar>
          </AppBar>
        </DialogTitle>
        <DialogContent classes={{root: classes.dialogContent}}>
          {this.props.children}
        </DialogContent>
        {
          this.props.dialogActions != null
            ? <DialogActions>{this.props.dialogActions}</DialogActions>
            : null
        }
      </Dialog>
    );
  }
}

CsuDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  open: PropTypes.bool,
  fullScreen: PropTypes.bool.isRequired,
  dialogActions: PropTypes.node,
  dialogProps: PropTypes.object,
};

export default withStyles(styles)(withMobileDialog()(CsuDialog));