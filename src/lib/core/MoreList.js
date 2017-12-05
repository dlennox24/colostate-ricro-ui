import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from 'material-ui/styles';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Icon from 'material-ui/Icon';
import Collapse from 'material-ui/transitions/Collapse';

const styles = theme => ({});

class MoreList extends Component {
  state = {
    open: false,
  }

  handleToggle = event => {
    console.log('clicked');
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const {
      // classes,
      list,
    } = this.props;

    return (
      <div>
        <ListItem
          aria-owns='account-menu'
          aria-haspopup='true'
          aria-label='Account'
          onClick={this.handleToggle}
          button
          >
          <ListItemIcon>
            <Icon>more_vert</Icon>
          </ListItemIcon>
          <ListItemText primary="More" />
          {this.state.open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
        </ListItem>
        <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {list.map(item =>
              <a key={item.name} className='listItemLink' href={item.link}>
                <ListItem dense button>
                  <ListItemIcon>
                    <Icon>{item.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText inset primary={item.name} secondary={item.secondary} />
                </ListItem>
              </a>
            )}
          </List>
        </Collapse>
      </div>
    );
  }
}

MoreList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
};

export default withStyles(styles)(MoreList);
