import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavList from './NavList';
import styles from './styles';

class Nav extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = isOpen => () => {
    this.setState({ mobileOpen: isOpen });
  };

  render() {
    const { app, classes, children } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} color="default">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle(true)}
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
          <nav className={classes.drawer}>
            <Hidden mdUp implementation="js">
              <SwipeableDrawer
                container={this.props.container}
                variant="temporary"
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle(false)}
                onOpen={this.handleDrawerToggle(true)}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <Toolbar>
                  <div className={classes.flex} />
                  <IconButton onClick={this.handleDrawerToggle(false)}>
                    <FontAwesomeIcon icon="times" />
                  </IconButton>
                </Toolbar>
                <Divider />
                <NavList />
              </SwipeableDrawer>
            </Hidden>
            <Hidden className={classes.drawerDocked} smDown implementation="css">
              <Paper className={classes.flex} square>
                <NavList />
              </Paper>
            </Hidden>
          </nav>
          <main className={classes.content}>{children}</main>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  app: PropTypes.object.isRequired,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Nav);
