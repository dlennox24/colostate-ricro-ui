import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <div className={classes.flex} />
          <IconButton onClick={setMobileOpen(false)}>
            <FontAwesomeIcon icon="times" />
          </IconButton>
        </Toolbar>
        <Divider />
        <NavList nav={nav} />
      </SwipeableDrawer>
    </Hidden>
    <Hidden className={classes.drawerDocked} mdDown implementation="css">
      <Paper className={classes.flex} square>
        <NavList nav={nav} />
      </Paper>
    </Hidden>
  </nav>
);

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  isMobileOpen: PropTypes.bool.isRequired,
  nav: PropTypes.array.isRequired,
  setMobileOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(Nav);
