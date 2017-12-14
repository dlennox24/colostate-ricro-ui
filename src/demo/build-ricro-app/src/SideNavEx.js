import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  withRouter,
  matchPath,
} from 'react-router'
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
  faCameraRetro
} from '@fortawesome/fontawesome-free-solid';

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
    color: theme.palette.common.lightBlack,
    fontWeight: 'bold',
    width: 24,
    height: 24,
  },
});

class SideNavEx extends Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
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
        <Link to='/' className='listItemLink'>
          <ListItem button className={
              matchPath(location.pathname, {
                path: '/',
                exact: true,
              }) && classes.active
            }>
            <ListItemIcon>
              <Icon>dashboard</Icon>
            </ListItemIcon>
            {!iconOnly && <ListItemText inset primary='Dashboard' />}
          </ListItem>
        </Link>
        <Link to="/typography" className='listItemLink'>
          <ListItem button className={
              matchPath(location.pathname, {
                path: '/typography',
              }) && classes.active
            }>
            <ListItemIcon>
              <Icon>text_fields</Icon>
            </ListItemIcon>
            {!iconOnly && <ListItemText inset primary='Typography' />}
          </ListItem>
        </Link>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faCameraRetro} className={classes.faIcon}/>
          </ListItemIcon>
          {!iconOnly && <ListItemText inset primary='Dropdown' secondary='with FontAwesome icon' />}
          {!iconOnly && (this.state.open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>)}
        </ListItem>
        <Collapse component='li' in={this.state.open} timeout='auto' unmountOnExit>
          <List disablePadding className={classNames(iconOnly ? 'sideNavSubMenuClosed' : 'sideNavSubMenu')}>
            <ListItem
              dense
              button
              classes={iconOnly ? null : {
                root: classes.listRoot
              }}
              >
              <ListItemIcon>
                <Avatar className={classes.avatar}>S1</Avatar>
              </ListItemIcon>
              {!iconOnly && <ListItemText inset primary='Section 1' />}
            </ListItem>
            <ListItem
              dense
              button
              classes={iconOnly ? null : {
                root: classes.listRoot
              }}
              >
              <ListItemIcon>
                <Avatar className={classes.avatar}>2</Avatar>
              </ListItemIcon>
              {!iconOnly && <ListItemText inset primary='Section 2' />}
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

SideNavEx.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SideNavEx));
