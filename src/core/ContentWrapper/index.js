import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import IconMenu from 'mdi-material-ui/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import BrowserCompatibilityWarning from '../BrowserCompatibilityWarning';
import Nav from '../Nav';
import styles from './styles';

class ContentWrapper extends React.Component {
  state = {
    isMobileOpen: false,
  };

  setMobileOpen = isOpen => () => {
    this.setState({ isMobileOpen: isOpen });
  };

  render() {
    const { app, classes, children, container, disableGutters } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar} color="default">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open navigation"
                onClick={this.setMobileOpen(true)}
                className={classes.menuButton}
              >
                <IconMenu />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                {app.name}
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.flex}>
            <a className={classes.skipNavLink} href="#main-content">
              Skip navigation
            </a>
            {app.nav && (
              <Nav
                nav={app.nav}
                container={container}
                isMobileOpen={this.state.isMobileOpen}
                setMobileOpen={this.setMobileOpen}
              />
            )}
            <main
              id="main-content"
              className={classNames(!disableGutters && classes.gutters, classes.content)}
            >
              {children}
            </main>
          </div>
        </div>
        <BrowserCompatibilityWarning />
      </React.Fragment>
    );
  }
}

ContentWrapper.propTypes = {
  app: PropTypes.object.isRequired,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired, // MUI withStyles()
  container: PropTypes.object,
  disableGutters: PropTypes.bool,
};

export default withStyles(styles)(ContentWrapper);
