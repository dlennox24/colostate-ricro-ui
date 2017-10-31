import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';

import Dialog from './Dialog';
import defaultProfileImg from './assets/images/default-profile.png';

const styles = theme => ({
  profileImg: {
    width: 150,
    height: 150,
    marginBottom: 15,
  }
});


class UserAccount extends Component {
  state = {
    open: false,
  }
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }
  handleOpenClick = () => {
    this.setState({
      open: true,
    });
  }
  render() {
    const classes = this.props.classes;
    return (
      <div>
        <ListItem button onClick={this.handleOpenClick}>
          <ListItemIcon>
            <Icon>account_circle</Icon>
          </ListItemIcon>
          <ListItemText inset primary='Account Settings' />
        </ListItem>
        <Dialog
          title="Account Settings"
          onRequestClose={this.handleRequestClose}
          open={this.state.open}
          >
          <div className='container-fluid text-center'>
          <div className='row'>
            <Avatar
              alt='Adelle Charles'
              src={defaultProfileImg}
              className={'ml-auto mr-auto '+classes.profileImg}
              />
          </div>
          <hr/>
          <div className='row justify-content-md-center'>
            <div className='col-md-3'>
                <ListItem>
                  <ListItemText primary={this.props.user.firstName} secondary='First Name'/>
                </ListItem>
            </div>
            <div className='col-md-3'>
                <ListItem>
                  <ListItemText primary={this.props.user.lastName} secondary='Last Name'/>
                </ListItem>
            </div>
          </div>
          <div className='row justify-content-md-center'>
            <div className='col-md-3'>
                <ListItem>
                  <ListItemText primary={this.props.user.eId} secondary='eID'/>
                </ListItem>
            </div>
            <div className='col-md-3'>
                <ListItem>
                  <ListItemText primary={this.props.user.csuId.toString().replace(/(.{3})/g, '$1 ')} secondary='CSU ID'/>
                </ListItem>
            </div>
          </div>
          <div className='row justify-content-md-center'>
            <div className='col'>
                <ListItem>
                  <ListItemText primary={this.props.user.email} secondary='Email'/>
                </ListItem>
            </div>
          </div>
        </div>
        </Dialog>
      </div>
    );
  }
}

UserAccount.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  dialogProps: PropTypes.node,
};

export default withStyles(styles)(UserAccount);
