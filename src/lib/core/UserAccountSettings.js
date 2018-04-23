import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  withStyles,
} from 'material-ui/styles';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';

import Dialog from '../components/Dialog';

const styles = theme => ({
  profileImg: {
    width: 150,
    height: 150,
    display: 'block',
    margin: '0 auto',
  },
  noVertPad: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
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
    const {
      classes,
      iconOnly,
      user,
      userDefaultProfileImg,
    } = this.props;
    const userGroups = _.sortBy(user.userGroups, ['alias', 'userGroupTypeId']);
    return (
      <div>
        <ListItem dense button onClick={this.handleOpenClick}>
          <ListItemIcon>
            <Icon>account_circle</Icon>
          </ListItemIcon>
          {!iconOnly && (<ListItemText inset primary='Account Settings' />)}
        </ListItem>
        <Dialog
          title='Account Settings'
          onClose={this.handleRequestClose}
          open={this.state.open}
          >
          <Grid container>
            <Grid item xs={12} md={3}>
              <img
                src={user.profileImg == null ? userDefaultProfileImg : user.profileImg}
                className={classes.profileImg}
                alt={user.displayName + " profile image"}
                />
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container>
                <Grid className={classes.noVertPad} item md={4} xs={12}>
                  <ListItem>
                    <ListItemText primary={user.displayName} secondary='Display Name'/>
                  </ListItem>
                </Grid>
                <Grid className={classes.noVertPad} item md={4} xs={12}>
                  <ListItem>
                    <ListItemText primary={user.lastName+', '+user.firstName} secondary='Name'/>
                  </ListItem>
                </Grid>
              </Grid>
              <Grid container>
                <Grid className={classes.noVertPad} item md={4} xs={12}>
                  <ListItem>
                    <ListItemText primary={user.eId} secondary='eID'/>
                  </ListItem>
                </Grid>
                <Grid className={classes.noVertPad} item md={4} xs={12}>
                  <ListItem>
                    <ListItemText primary={user.csuId.toString().replace(/(.{3})/g, '$1 ')} secondary='CSU ID'/>
                  </ListItem>
                </Grid>
              </Grid>
              <Grid container>
                <Grid className={classes.noVertPad} item xs={12}>
                  <ListItem>
                    <ListItemText primary={user.email} secondary='Email'/>
                  </ListItem>
                </Grid>
              </Grid>
              {_.isEmpty(userGroups) ? null : (
                <Grid container>
                  <Grid item xs={12}>
                    <List disablePadding>
                      <Divider/>
                      {userGroups.map((userGroup, i) =>
                        <ListItem key={i}>
                          <ListItemText primary={userGroup.alias} secondary={userGroup.description} />
                        </ListItem>
                      )}
                    </List>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

UserAccount.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  dialogProps: PropTypes.node,
  iconOnly: PropTypes.bool,
  userDefaultProfileImg: PropTypes.string.isRequired,
};

export default withStyles(styles)(UserAccount);