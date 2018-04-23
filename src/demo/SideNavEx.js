import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  withRouter,
  matchPath,
} from 'react-router';
import {
  Link
} from 'react-router-dom';
import {
  withStyles
} from 'material-ui/styles';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faGithub,
} from '@fortawesome/fontawesome-free-brands';
import {
  faCode,
  faLongArrowRight,
} from '@fortawesome/fontawesome-pro-regular';

import components from './components/components.json';

const styles = theme => ({
  listRoot: {
    marginLeft: theme.spacing.unit * 5
  },
  active: {
    borderRight: '5px solid ' + theme.palette.csuBrand.secondary.aggieOrange,
  },
  faIcon: {
    width: '24px !important',
  },
  avatar: {
    backgroundColor: 'initial',
    color: theme.palette.grey[600],
    fontWeight: 'bold',
    width: 24,
    height: 24,
  },
});

class SideNavEx extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const {
      classes,
      iconOnly,
      location,
    } = this.props;

    return (
      <List className={classes.root}>
        <Link to='/' >
          <ListItem
            className={
              matchPath(location.pathname, {
                path: '/',
                exact: true,
              }) && classes.active
            }
            button
            >
            <ListItemIcon>
              <Icon>text_fields</Icon>
            </ListItemIcon>
            {!iconOnly && <ListItemText inset primary='Typography' />}
          </ListItem>
        </Link>
        <ListItem
          className={
            matchPath(location.pathname, {
              path: '/component',
            }) && classes.active
          }
          onClick={this.handleClick}
          button
          >
          <ListItemIcon>
            <FontAwesomeIcon icon={faCode} className={classes.faIcon}/>
          </ListItemIcon>
          {!iconOnly && <ListItemText inset primary='Components' />}
          {!iconOnly && (this.state.open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>)}
        </ListItem>
        <Collapse component='li' in={this.state.open} timeout='auto' unmountOnExit>
          <List disablePadding className={classNames(iconOnly ? 'sideNavSubMenuClosed' : 'sideNavSubMenu')}>
            {components.map(component => (
              <Link to={'/component/'+component.path}  key={component.path}>
                <ListItem
                  className={
                    matchPath(location.pathname, {
                      path: '/component/'+component.path,
                    }) && classes.active
                  }
                  classes={iconOnly ? null : {root: classes.listRoot}}
                  dense
                  button
                  >
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faLongArrowRight} className={classes.faIcon}/>
                    </ListItemIcon>
                  {!iconOnly && <ListItemText inset primary={component.label} />}
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
        <Link to='/404' >
          <ListItem button>
            <ListItemIcon>
              <Avatar className={classes.avatar}>S1</Avatar>
            </ListItemIcon>
            {!iconOnly && <ListItemText primary='MUI Avatar List Item Example with Long Name' />}
          </ListItem>
        </Link>
        <a href='https://github.com/dlennox24/ricro-app-template' aria-label='View on GitHub'>
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faGithub} className={classes.faIcon}/>
            </ListItemIcon>
            {!iconOnly && <ListItemText inset primary='View on GitHub' />}
          </ListItem>
        </a>
      </List>
    );
  }
}

SideNavEx.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SideNavEx));