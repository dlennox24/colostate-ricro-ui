import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import Dialog from '../Dialog';

const styles = theme => ({
  browserIcons: {
    height: 80,
    width: 80,
    margin: theme.spacing.unit,
    marginBottom: 13,
  },
  browserLinks: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

class IeWarning extends Component {
  state = {
    open: true,
  }
  handleClose = () => {
    this.setState({
      open: !this.state.open
    });
  }
  detectIeUserAgent = () => {
    let ua = window.navigator.userAgent;
    let msie = ua.indexOf('MSIE ');
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
      return true;
    }
    // return true;
    return false;
  }
  componentDidMount() {
    this.setState({
      open: this.detectIeUserAgent()
    });
  }
  render() {
    let {classes} = this.props;
    const browsers = [{
      name: 'Google Chrome',
      shortName: 'Chrome',
      icon: 'fa-chrome',
      url: 'https://www.google.com/chrome/',
    }, {
      name: 'Mozilla FireFox',
      shortName: 'FireFox',
      icon: 'fa-firefox',
      url: 'https://www.mozilla.org/en-US/firefox/new/',
    }, {
      name: 'Apple Safari',
      shortName: 'Safari',
      icon: 'fa-safari',
      url: 'https://www.apple.com/safari/',
    }, {
      name: 'Microsoft Edge',
      shortName: 'Edge',
      icon: 'fa-edge',
      url: 'https://www.microsoft.com/en-us/windows/microsoft-edge',
    }];
    return (
      <div>
        <Dialog
          onRequestClose={this.handleClose}
          open={this.state.open}
          title='Browser Incompatibility Warning'
          muiDialogProps={{
            ignoreBackdropClick: true,
          }}
          >
          <Typography>
            We've detected that you are using an outdated browser. This
            application doesn't support this browser. The application may or may
            not work correctly. It is highly recommended that you use one of the
            following browsers:
          </Typography>
          <div className='container text-center'>
            <div className='row'>
              {browsers.map((browser, i) =>
                  <div key={i} className='col'>
                    <a className={classes.browserLinks} href={browser.url}>
                      <IconButton className={classes.browserIcons} aria-label={'Download '+browser.shortName}>
                        <i className={'fa fa-3x '+browser.icon} aria-hidden='true'></i>
                      </IconButton>
                      <Typography type='title'>{browser.name}</Typography>
                    </a>
                  </div>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

IeWarning.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IeWarning);
