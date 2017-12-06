import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import _ from 'lodash';
import classNames from 'classnames';
import compose from 'recompose/compose';
import {
  withStyles
} from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import AppDrawer from './AppDrawer';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: 1,
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
    fixedWrapper: false,
  }

  stickyHeader = (scrollTop) => {
    if (document.getElementById('csuLogoBar').offsetHeight - scrollTop <= 0) {
      this.setState({
        fixedWrapper: true,
      });
    } else {
      this.setState({
        fixedWrapper: false,
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
      sideNav,
    } = this.props;

    const {
      open,
      fixedWrapper,
    } = this.state;

    const menuOpen = open && (width === 'sm' || width === 'xs');
    const hasSideNav = !_.isEmpty(config.app.sideNav) || config.app.hasLogin || sideNav;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            color='default'
            position='static'
            className={classNames(
              classes.appBar,
              fixedWrapper && classes.fixWrapper,
              open && classes.appBarShift,
              menuOpen && classes.hide
            )}
            >
            <Toolbar disableGutters={!open && hasSideNav}>
              {hasSideNav && (
                <IconButton
                  aria-label='open drawer'
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                  >
                  <Icon>menu</Icon>
                </IconButton>
              )}
              <Typography type='title' color='inherit' noWrap>
                {config.app.name}
              </Typography>
            </Toolbar>
          </AppBar>
          {hasSideNav && (
            <AppDrawer
              open={open}
              config={config}
              sideNav={sideNav}
              handleDrawerClose={this.handleDrawerClose}
              fixedWrapper={fixedWrapper}
              />
          )}
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
  sideNav: PropTypes.func,
  width: PropTypes.string,
};

export default compose(withStyles(styles), withWidth())(AppWrapper);
