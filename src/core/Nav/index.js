import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { mdiClose } from '@mdi/js';
import MdiIcon from '@mdi/react';
import PropTypes from 'prop-types';
import React from 'react';
import NavList from './NavList';
import styles from './styles';

const Nav = ({ classes, container, isMobileOpen, nav, setMobileOpen, theme }) => (
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
          <Tooltip title="Close Navigation">
            <IconButton onClick={setMobileOpen(false)} aria-label="Close Navigation">
              <Icon>
                <MdiIcon path={mdiClose} color={theme.palette.icon.main} />
              </Icon>
            </IconButton>
          </Tooltip>
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
  classes: PropTypes.object.isRequired, // MUI withStyles()
  container: PropTypes.object,
  isMobileOpen: PropTypes.bool.isRequired,
  nav: PropTypes.array.isRequired,
  setMobileOpen: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // MUI withTheme
};

export default withStyles(styles, { withTheme: true })(Nav);
