import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import {
  faBell,
  faCode,
  faExclamationTriangle,
  faExternalLinkSquareAlt,
  faSpinner,
  faUsers,
} from '@fortawesome/fontawesome-free-solid';

const components = [
  {
    icon: faUsers,
    label: 'Committees',
    path: 'committees',
  },
  {
    icon: faExternalLinkSquareAlt,
    label: 'Dialog',
    path: 'dialog',
  },
  {
    icon: faExclamationTriangle,
    label: 'HTTP Error',
    path: 'http-error',
  },
  {
    icon: faSpinner,
    label: 'Load More',
    path: 'load-more',
  },
  {
    icon: faBell,
    label: 'Snackbar',
    path: 'snackbar',
  },
];

const styles = theme => ({
  active: {
    borderRight: `5px solid ${theme.palette.csuBrand.secondary.aggieOrange}`,
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

class SideNavEx extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { classes, location } = this.props;

    return (
      <List className={classes.root}>
        <Link to="/">
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
            <ListItemText inset primary="Typography" />
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
            <FontAwesomeIcon icon={faCode} className={classes.faIcon} />
          </ListItemIcon>
          <ListItemText primary="Components" />
          {this.state.open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
        </ListItem>
        <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {components.map(component => (
              <Link to={`/component/${component.path}`} key={component.path}>
                <ListItem
                  className={
                    matchPath(location.pathname, {
                      path: `/component/${component.path}`,
                    }) && classes.active
                  }
                  dense
                  button
                >
                  <ListItemIcon>
                    <FontAwesomeIcon icon={component.icon} className={classes.faIcon} />
                  </ListItemIcon>
                  <ListItemText primary={component.label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
        <Link to="/404">
          <ListItem button>
            <ListItemIcon>
              <Avatar className={classes.avatar}>S1</Avatar>
            </ListItemIcon>
            <ListItemText primary="MUI Avatar List Item Example with Long Name" />
          </ListItem>
        </Link>
        <a href="https://github.com/dlennox24/colostate-ricro-ui" aria-label="View on GitHub">
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faGithub} className={classes.faIcon} />
            </ListItemIcon>
            <ListItemText inset primary="View on GitHub" />
          </ListItem>
        </a>
      </List>
    );
  }
}

SideNavEx.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default withRouter(withStyles(styles)(SideNavEx));
