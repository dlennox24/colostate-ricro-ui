import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import classNames from 'classnames';
import compose from 'recompose/compose';
import {
  withStyles
} from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import Login from '../../redux/Login';
import MoreList from '../MoreList';

const drawerWidth = 275;

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: 1,
    // overflow: 'hidden',
    flex: 1,
  },
  appFrame: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    borderBottom: '3px solid ' + theme.palette.csuBrand.primary.gold,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 3,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      width: 0,
    },
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
    maxHeight: '100%',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  fixWrapper: {
    position: 'fixed',
    top: 0,
    [theme.breakpoints.down('sm')]: {
      top: 'initial',
      position: 'relative',
    },
  },
  fixDrawerInnner: {
    width: 60,
    overflowX: 'hidden',
  },
  fixList: {
    '& li[class*=MuiListItem-root-]': {
      maxHeight: 48,
    },
    '& li[class*=MuiListItem-dense-]': {
      maxHeight: 40,
    },
  },
  '@global': {
    '#headerDrawer': {
      [theme.breakpoints.down('sm')]: {
        flex: 1,
      },
    },
  },
});

class AppWrapper extends React.Component {
  state = {
    open: false,
    fixedWraper: false,
  }

  stickyHeader = (scrollTop) => {
    if (document.getElementById('csuLogoBar').offsetHeight - scrollTop <= 0) {
      this.setState({
        fixedWraper: true,
      });
    } else {
      this.setState({
        fixedWraper: false,
      });
    }
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false
    });
  };

  componentDidMount() {
    const stickyHeader = this.stickyHeader;
    $(window).scroll(function() {
      stickyHeader($(this).scrollTop());
    });
  }

  render() {
    const {
      classes,
      config,
      width,
    } = this.props;

    const {
      open,
      fixedWraper,
    } = this.state;

    const menuOpen = open && (width === 'sm' || width === 'xs');
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            color="default"
            position='static'
            className={classNames(
              classes.appBar,
              fixedWraper && classes.fixWrapper,
              open && classes.appBarShift,
              menuOpen && classes.hide
            )}
            >
            <Toolbar disableGutters={!open}>
              <IconButton
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
                >
                <Icon>menu</Icon>
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                {config.app.name}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            id='headerDrawer'
            type="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                open ? classes.Close : classes.drawerPaperClose
              ),
            }}
            open={open}
            >
            <div className={classNames(
                classes.drawerInner,
                fixedWraper && classes.fixWrapper,
                (fixedWraper && !open) && classes.fixDrawerInnner
              )}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <Icon>chevron_left</Icon>
                </IconButton>
              </div>
              <Divider />
              <List className={classNames(classes.list, fixedWraper && classes.fixList)}>
                <Login iconOnly={fixedWraper && !open} api={config.api} autoLogin={config.app.header.autoLogin}/>
                <MoreList list={config.app.header.moreMenu}/>
              </List>
              <Divider />
            </div>
          </Drawer>
          <main className={classNames(classes.content, menuOpen && classes.hide)}>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

AppWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  width: PropTypes.string,
};

export default compose(withStyles(styles), withWidth())(AppWrapper);
