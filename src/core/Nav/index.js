import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconClose from 'mdi-material-ui/Close';
import PropTypes from 'prop-types';
import React from 'react';
import NavList from './NavList';
import styles from './styles';

const Nav = ({ classes, container, isMobileOpen, nav, setMobileOpen }) => (
  <nav className={classes.drawer}>
    <Hidden lgUp implementation="js">
      <SwipeableDrawer
        container={container}
        variant="temporary"
        open={isMobileOpen}
        onClose={setMobileOpen(false)}
        onOpen={setMobileOpen(true)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Toolbar>
          <div className={classes.swipeableDrawerToolbar} />
          <Tooltip title="Close Navigation">
            <IconButton onClick={setMobileOpen(false)} aria-label="Close Navigation">
              <IconClose />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <Divider />
        <NavList nav={nav} setMobileOpen={setMobileOpen} />
      </SwipeableDrawer>
    </Hidden>
    <Hidden className={classes.drawerDocked} mdDown implementation="css">
      <Paper className={classes.swipeableDrawerToolbar} square>
        <NavList className={classes.stickyNav} nav={nav} />
      </Paper>
    </Hidden>
  </nav>
);

Nav.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  container: PropTypes.object,
  isMobileOpen: PropTypes.bool.isRequired,
  nav: PropTypes.array.isRequired,
  setMobileOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(Nav);
