import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LoginWrapper from '../../redux/Login';

const drawerWidth = 350;
const mobileBreak = 600;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    borderBottom: `3px solid ${theme.palette.csuBrand.primary.gold}`,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [`@media (max-width:${mobileBreak}px)`]: {
      width: 0,
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    [theme.breakpoints.down('sm')]: {
      marginRight: 12,
    },
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: `${theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })} whiteSpace ${theme.transitions.duration.enteringScreen}`,
    [`@media (max-width:${mobileBreak}px)`]: {
      width: '100vw',
    },
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  flex: {
    flex: 1,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginTop: 64 + 3, // 3px bottom border on header
    overflow: 'auto',
    padding: theme.spacing.unit * 2,
    paddingBottom: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: 56 + 3, // 3px bottom border on header
    },
  },
  // mainContent: {
  //   overflow: 'auto',
  //   padding: theme.spacing.unit * 2,
  // },
  // mainContentContainer: {
  //   backgroundColor: theme.palette.background.default,
  //   display: 'flex',
  //   flexDirection: 'column',
  //   flexGrow: 1,
  //   marginTop: 64 + 3, // 3px bottom border on header
  //   [theme.breakpoints.down('sm')]: {
  //     marginTop: 56 + 3, // 3px bottom border on header
  //   },
  // },
});

class AppWrapper extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { children, classes, config, SideNav, theme } = this.props;
    const hasSideNav = config.app.hasLogin || SideNav;
    return (
      <div className={classes.root}>
        <AppBar
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          color="default"
          position="absolute"
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {config.app.name}
            </Typography>
          </Toolbar>
        </AppBar>
        {hasSideNav && (
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <Icon>chevron_right</Icon> : <Icon>chevron_left</Icon>}
              </IconButton>
            </div>
            <Divider />
            {config.app.hasLogin && (
              <React.Fragment>
                <List component="nav">
                  <LoginWrapper
                    api={config.api}
                    autoLogin={config.app.hasAutoLogin}
                    userDefaultProfileImg={config.app.userDefaultProfileImg}
                  />
                  <ListItem button component="a" href={config.unit.contactHref}>
                    <ListItemIcon>
                      <Icon>email</Icon>
                    </ListItemIcon>
                    <ListItemText inset primary="Contact Us" />
                  </ListItem>
                </List>
                <Divider />
              </React.Fragment>
            )}
            {SideNav && <SideNav />}
          </Drawer>
        )}
        <main id="main-content" className={classes.content}>
          {children}
        </main>
      </div>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  SideNav: PropTypes.func,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppWrapper);
