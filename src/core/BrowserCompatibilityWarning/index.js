import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import MdiIcon from '@mdi/react';
import PropTypes from 'prop-types';
import React from 'react';
import CloseableDialog from '../../component/CloseableDialog';
import styles from './styles';
import DialogContent from '@material-ui/core/DialogContent';
import browsers from './browsers';

class IeWarning extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  detectIeUserAgent = () => {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
      return true;
    }
    return false;
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      this.detectIeUserAgent() && (
        <div>
          <CloseableDialog
            onClose={this.handleClose}
            open={open}
            header="Browser Incompatibility Warning"
            disableBackdropClick
            disableEscapeKeyDown
          >
            <DialogContent className={classes.contentContainer}>
              <Typography variant="body1" paragraph>
                We&apos;ve detected that you are using an outdated browser. This application
                doesn&apos;t support this browser. The application may or may not work correctly. It
                is highly recommended that you use one of the following browsers:
              </Typography>
              <Grid container justify="center" alignItems="center" alignContent="center">
                {browsers.map(browser => (
                  <Grid
                    key={browser.shortName}
                    item
                    xs="12"
                    sm="6"
                    md="3"
                    className={classes.browserPaper}
                  >
                    <MdiIcon path={browser.icon} size="100px" color={theme.palette.icon.main} />
                    <Button variant="outlined">{`Download ${browser.name}`}</Button>
                  </Grid>
                ))}
              </Grid>
            </DialogContent>
          </CloseableDialog>
        </div>
      )
    );
  }
}

IeWarning.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  theme: PropTypes.object.isRequired, // MUI withTheme
};

export default withStyles(styles, { withTheme: true })(IeWarning);
