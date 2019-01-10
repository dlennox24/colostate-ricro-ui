import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Portal from '@material-ui/core/Portal';
import Snackbar from '@material-ui/core/Snackbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { IconSnackbarContent } from 'colostate-ricro-ui';
import IconCloseOctagon from 'mdi-material-ui/CloseOctagon';
import IconCommentText from 'mdi-material-ui/CommentText';
import IconContain from 'mdi-material-ui/Contain';
import IconFloppy from 'mdi-material-ui/Floppy';
import IconFolderMultiple from 'mdi-material-ui/FolderMultiple';
import PropTypes from 'prop-types';
import React from 'react';
import Form from './Form';
import Showcase from './Showcase';
import Source from './Source';
import styles from './styles';

const customIcons = {
  none: null,
  contain: IconContain,
  'comment-text': IconCommentText,
  'close-octagon': IconCloseOctagon,
  'folder-multiple': IconFolderMultiple,
  floppy: IconFloppy,
};

class IconSnackbarContentPage extends React.Component {
  state = {
    variant: 'info',
    message: 'Created new snackbar!',
    isOpen: false,
    anchorVert: 'bottom',
    anchorHorz: 'center',
    autoHideDuration: 6,
    isSourceOpen: false,
    isActionDisabled: false,
    isIconDisabled: false,
    customIcon: 'none',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleToggleSnackbarOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  handleToggleSourceOpen = () => {
    this.setState(state => ({
      isSourceOpen: !state.isSourceOpen,
    }));
  };

  createSnackbarContentPreview = (disableAction = false) => {
    const { variant, message, isActionDisabled, isIconDisabled, customIcon } = this.state;
    return (
      <IconSnackbarContent
        variant={variant}
        onClose={this.handleToggleSnackbarOpen}
        message={message}
        disableAction={disableAction ? null : isActionDisabled}
        disableIcon={isIconDisabled}
        icon={customIcons[customIcon]}
      />
    );
  };

  render() {
    const { anchorHorz, anchorVert, autoHideDuration, isOpen, isSourceOpen } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Form
          {...this.state}
          customIcons={customIcons}
          onChange={this.handleChange}
          onSwitchChange={this.handleSwitchChange}
        />
        <Grid container alignItems="center">
          <Grid className={classes.gridItem} item xs={12} sm={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleToggleSnackbarOpen}
              fullWidth
            >
              Open Snackbar
            </Button>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={2}>
            <Button onClick={this.handleToggleSourceOpen} variant="outlined" fullWidth>
              {isSourceOpen ? 'Close Source' : 'View Source'}
            </Button>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={5}>
            {this.createSnackbarContentPreview()}
          </Grid>
        </Grid>
        <Source {...this.state} />
        <Divider className={classes.divider} />
        <Showcase />
        <Portal>
          <Snackbar
            anchorOrigin={{ vertical: anchorVert, horizontal: anchorHorz }}
            open={isOpen}
            autoHideDuration={autoHideDuration <= 0 ? null : autoHideDuration * 1000}
            onClose={this.handleToggleSnackbarOpen}
          >
            {this.createSnackbarContentPreview(true)}
          </Snackbar>
        </Portal>
      </React.Fragment>
    );
  }
}

IconSnackbarContentPage.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
};

export default withStyles(styles)(IconSnackbarContentPage);
