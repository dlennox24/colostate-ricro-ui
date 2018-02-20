  import React, {
    Component
  } from 'react';
  import PropTypes from 'prop-types';
  import _ from 'lodash';
  import classNames from 'classnames';
  import {
    withStyles
  } from 'material-ui/styles';
  import Drawer from 'material-ui/Drawer';
  import List, {
    ListItem,
    ListItemIcon,
    ListItemText
  } from 'material-ui/List';
  import Divider from 'material-ui/Divider';
  import Icon from 'material-ui/Icon';
  import IconButton from 'material-ui/IconButton';
  import Tooltip from 'material-ui/Tooltip';

  import Login from '../../redux/Login';

  const drawerWidth = 325;
  const drawerWidthClosed = 60;
  const styles = theme => ({
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
      width: drawerWidthClosed + 1,
      // overflowX: 'hidden',
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
      width: drawerWidth - 1,
      maxHeight: '100%',
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
    closed: {
      width: drawerWidthClosed,
    }
  });

  class AppDrawer extends Component {
    render() {
      const {
        classes,
        config,
        open,
        handleDrawerClose,
        sideNav,
      } = this.props;

      const SideNav = this.props.sideNav;
      const hasTopNav = !_.isEmpty(config.app.sideNav) || config.app.hasLogin;
      return (
        <Drawer
        id='headerDrawer'
        variant='permanent'
        open={open}
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          ),
        }}
        >
        <div className={classNames(
            classes.drawerInner,
            (!open && classes.closed),
          )}>
          <div className={classes.drawerHeader}>
            <Tooltip
              aria-label='hide drawer'
              title='Minimize'
              placement='left'>
              <IconButton onClick={handleDrawerClose}>
                <Icon>chevron_left</Icon>
              </IconButton>
            </Tooltip>
          </div>
          <Divider />
          {hasTopNav && (
            <List>
              {config.app.hasLogin && <Login iconOnly={!open} api={config.api} autoLogin={config.app.hasAutoLogin}/>}
              {!_.isEmpty(config.app.sideNav) && config.app.sideNav.map(item =>
                <a key={item.name}  href={item.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon style={item.iconColor && {color: item.iconColor}}>{item.icon}</Icon>
                    </ListItemIcon>
                    {open && <ListItemText inset primary={item.name} />}
                  </ListItem>
                </a>
              )}
            </List>
          )}
          {hasTopNav && <Divider />}
          {sideNav && <SideNav iconOnly={!open} />}
        </div>
      </Drawer>
      );
    }
  }

  AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
    sideNav: PropTypes.func,
    width: PropTypes.string,
  };

  export default withStyles(styles)(AppDrawer);