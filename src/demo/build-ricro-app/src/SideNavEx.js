import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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

const styles = theme => ({
  listRoot: {
    marginLeft: theme.spacing.unit * 5
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
    } = this.props;

    return (
      <List className={classes.root}>
        <ListItem button>
          <ListItemIcon>
            <Icon>send</Icon>
          </ListItemIcon>
          {!iconOnly && <ListItemText inset primary='Sent mail' />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>drafts</Icon>
          </ListItemIcon>
          {!iconOnly && <ListItemText inset primary='Drafts' />}
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <Icon>inbox</Icon>
          </ListItemIcon>
          {!iconOnly && <ListItemText inset primary='Inbox' />}
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
                <Icon>star</Icon>
              </ListItemIcon>
              {!iconOnly && <ListItemText inset primary='Starred' />}
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

SideNavEx.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavEx);
