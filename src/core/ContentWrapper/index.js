import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const { app, classes, children, container } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} color="default">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.setMobileOpen(true)}
              className={classes.menuButton}
            >
              <FontAwesomeIcon icon="bars" />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {app.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.flex}>
          <Nav
            nav={app.nav}
            container={container}
            isMobileOpen={this.state.isMobileOpen}
            setMobileOpen={this.setMobileOpen}
          />
          <main className={classes.content}>{children}</main>
        </div>
      </div>
    );
  }
}

ContentWrapper.propTypes = {
  app: PropTypes.object.isRequired,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
};

export default withStyles(styles)(ContentWrapper);
