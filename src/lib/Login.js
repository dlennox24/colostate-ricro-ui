import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import $ from 'jquery';
import {
  withStyles,
} from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Menu from 'material-ui/Menu';
import Button from 'material-ui/Button';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';

import UserAccountSettings from './UserAccountSettings';
import apiCall from './utils/apiCall';
import defaultProfileImg from './assets/images/default-profile.png';

const styles = theme => ({
  accountAvatar: {
    marginRight: 0,
    height: '40px',
    width: '40px',
  },
  container: {
    height: '100%',
  },
});

class Login extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  }

  handleClick = event => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = event => {
    this.setState({
      open: false,
    });
    if (event.currentTarget.id === 'logout') {
      this.props.onLogout();
    }
    console.log(event.currentTarget.id);
  };

  handleLogin(eId) {
    console.log(new Date().getTime() + ': login event triggered');
    $.when(apiCall('/user/login/', {
      data: {
        eId,
      },
    })).then((data) => {
      if (data.status === 'success') {
        this.props.onLogin(data.result);
      } else {
        console.log(data);
      }
    });
  }

  componentWillMount() {
    this.handleLogin(830126214);
  }

  render() {
    const classes = this.props.classes;

    if (!_.isEmpty(this.props.height)) {
      if (!this.props.height.match(/^[0-9]+(em|ex|ch|rem|vw|vh|vmin|vmax|%|cm|mm|in|px|pt|pc)$/g)) {
        console.error('ricror-app-template/Login\nInvalid height value: ' + this.props.height);
      }
    }

    if (_.isEmpty(this.props.user)) {
      return (<Button onClick={this.handleLogin.bind(this,830126214)}>login</Button>);
    } else {
      return (
        <div style={{height: this.props.height}}>
          <ListItem
            id='account-menu-button'
            aria-owns='account-menu'
            aria-haspopup='true'
            aria-label='Account'
            className={classes.container}
            onClick={this.handleClick}
            button
            dense
            >
            <ListItemIcon>
              <Avatar className={classes.accountAvatar} src={defaultProfileImg} />
            </ListItemIcon>
            <ListItemText
              primary={this.props.user.displayName}
              secondary={this.props.user.csuId.toString().replace(/(.{3})/g, '$1 ')}
              />
          </ListItem>
          <Menu
            id='account-menu'
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
            >
            <UserAccountSettings user={this.props.user}/>
            <ListItem id='logout' button onClick={this.handleRequestClose}>
              <ListItemIcon>
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText inset primary='Logout' />
            </ListItem>
          </Menu>
        </div>
      )
    }
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  height: PropTypes.string,
};

export default withStyles(styles)(Login);
