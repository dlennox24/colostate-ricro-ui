import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Portal from '@material-ui/core/Portal';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { IconSnackbarContent } from 'colostate-ricro-ui';
import IconCloseOctagon from 'mdi-material-ui/CloseOctagon';
import IconCommentText from 'mdi-material-ui/CommentText';
import IconContain from 'mdi-material-ui/Contain';
import IconFloppy from 'mdi-material-ui/Floppy';
import IconFolderMultiple from 'mdi-material-ui/FolderMultiple';
import React from 'react';
import styles from './styles';

const variantRows = [
  [{ variant: 'default' }, { variant: 'primary' }],
  [{ variant: 'secondary' }, { variant: 'info', key: 'noAction' }],
  [{ variant: 'success' }, { variant: 'warning' }],
  [{ variant: 'error' }, { variant: 'info', key: 'noIcon' }],
];

const variantTypes = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
const anchorVertTypes = ['top', 'bottom'];
const anchorHorzTypes = ['left', 'center', 'right'];
const customIconNames = [
  'none',
  'contain',
  'comment-text',
  'close-octagon',
  'folder-multiple',
  'floppy',
];
const IconNone = null;
const customIcons = {
  none: IconNone,
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

  render() {
    const {
      anchorHorz,
      anchorVert,
      autoHideDuration,
      customIcon,
      isActionDisabled,
      isIconDisabled,
      isOpen,
      isSourceOpen,
      message,
      variant,
    } = this.state;
    const { classes } = this.props;

    const source =
      '<Portal>\n' +
      '  <Snackbar\n' +
      `    anchorOrigin={{ vertical: "${anchorVert}", horizontal: "${anchorHorz}" }}\n` +
      '    open={isOpen} // from component state\n' +
      `    autoHideDuration={${autoHideDuration <= 0 ? null : autoHideDuration * 1000}}\n` +
      '    onClose={this.handleToggleSnackbarOpen}\n' +
      '  >\n' +
      '    <IconSnackbarContent\n' +
      `      variant="${variant}"\n` +
      '      onClose={this.handleToggleSnackbarOpen} // component method\n' +
      `${
        customIcon !== 'none'
          ? '      icon={Icon} // imported mdi-material-ui icon component \n'
          : ''
      }` +
      `      message="${message}"\n` +
      `${isActionDisabled ? '      disableAction\n' : ''}` +
      `${isIconDisabled ? '      disableIcon\n' : ''}` +
      '    />\n' +
      '  </Snackbar>\n' +
      '</Portal>';

    const previewSnackbarContent = (
      <IconSnackbarContent
        variant={variant}
        onClose={this.handleToggleSnackbarOpen}
        message={message}
        disableAction={isActionDisabled}
        disableIcon={isIconDisabled}
        icon={customIcons[customIcon]}
      />
    );
    // debugger;
    return (
      <React.Fragment>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
              <TextField
                id="select-variant"
                select
                label="Variant"
                value={variant}
                onChange={this.handleChange('variant')}
                SelectProps={{ MenuProps: { className: classes.menu } }}
                margin="normal"
                variant="outlined"
                fullWidth
              >
                {variantTypes.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
              <TextField
                id="select-anchorVert"
                select
                label="Align Vertical"
                value={anchorVert}
                onChange={this.handleChange('anchorVert')}
                SelectProps={{ MenuProps: { className: classes.menu } }}
                margin="normal"
                variant="outlined"
                fullWidth
              >
                {anchorVertTypes.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
              <TextField
                id="select-anchorHorz"
                select
                label="Align Horizontal"
                value={anchorHorz}
                onChange={this.handleChange('anchorHorz')}
                SelectProps={{ MenuProps: { className: classes.menu } }}
                margin="normal"
                variant="outlined"
                fullWidth
              >
                {anchorHorzTypes.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
              <TextField
                id="select-autoHideDuration"
                label="Autohide Duration"
                value={autoHideDuration}
                onChange={this.handleChange('autoHideDuration')}
                type="number"
                InputLabelProps={{ shrink: true }}
                margin="normal"
                variant="outlined"
                helperText={autoHideDuration <= 0 ? 'Autohide is disabled' : 'Seconds'}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid className={classes.gridItem} item xs={12} sm={3}>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.isActionDisabled}
                      onChange={this.handleSwitchChange('isActionDisabled')}
                      value="isActionDisabled"
                      color="primary"
                    />
                  }
                  label="Disable Action"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.isIconDisabled}
                      onChange={this.handleSwitchChange('isIconDisabled')}
                      value="isIconDisabled"
                      color="primary"
                    />
                  }
                  label="Disable Icon"
                />
              </FormGroup>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <TextField
                id="snackbar-smessage"
                label="Message"
                value={message}
                onChange={this.handleChange('message')}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={3}>
              <TextField
                id="select-customIcon"
                select
                label="Custom Icon"
                value={customIcon}
                onChange={this.handleChange('customIcon')}
                SelectProps={{ MenuProps: { className: classes.menu } }}
                margin="normal"
                variant="outlined"
                fullWidth
              >
                {customIconNames.map(option => {
                  const Icon = customIcons[option];
                  return (
                    <MenuItem key={option} value={option}>
                      {Icon && <Icon className={classNames(classes.icon, classes.iconVariant)} />}
                      {option}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>
          </Grid>
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
              <Button onClick={this.handleToggleSourceOpen} fullWidth>
                {isSourceOpen ? 'Close Source' : 'View Source'}
              </Button>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={5}>
              {previewSnackbarContent}
            </Grid>
          </Grid>
        </form>
        <div className={classes.gridItem}>
          <Collapse in={isSourceOpen}>
            <pre>{source}</pre>
          </Collapse>
        </div>
        <Divider className={classes.divider} />
        {variantRows.map(row => (
          <Grid container key={row[0].key || row[0].variant}>
            {row.map((variant, i) => (
              <Grid
                key={variant.key || variant.variant}
                className={classes.gridItem}
                item
                xs={12}
                sm={6}
              >
                <IconSnackbarContent
                  variant={variant.variant}
                  message={`Snackbar variant: ${variant.variant}`}
                  disableAction={variant.key === 'noAction'}
                  disableIcon={variant.key === 'noIcon'}
                />
              </Grid>
            ))}
          </Grid>
        ))}
        <Portal>
          <Snackbar
            anchorOrigin={{ vertical: anchorVert, horizontal: anchorHorz }}
            open={isOpen}
            autoHideDuration={autoHideDuration <= 0 ? null : autoHideDuration * 1000}
            onClose={this.handleToggleSnackbarOpen}
          >
            {previewSnackbarContent}
          </Snackbar>
        </Portal>
      </React.Fragment>
    );
  }
}

IconSnackbarContentPage.propTypes = {};

export default withStyles(styles)(IconSnackbarContentPage);
