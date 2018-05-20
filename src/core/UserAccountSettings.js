import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Dialog from '../components/Dialog';

const styles = () => ({
  profileImg: {
    width: 150,
    height: 150,
    display: 'block',
    margin: '0 auto',
  },
  noVertPad: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
  },
});

class UserAccount extends React.Component {
  state = {
    open: false,
  };
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  handleOpenClick = () => {
    this.setState({
      open: true,
    });
  };
  render() {
    const { classes, iconOnly, user } = this.props;
    const userGroups = _.sortBy(user.userGroups, ['alias', 'userGroupTypeId']);
    return (
      <div>
        <ListItem dense button onClick={this.handleOpenClick}>
          <ListItemIcon>
            <Icon>account_circle</Icon>
          </ListItemIcon>
          {!iconOnly && <ListItemText inset primary="Account Settings" />}
        </ListItem>
        <Dialog title="Account Settings" onClose={this.handleRequestClose} open={this.state.open}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <img
                src={user.profileImg}
                className={classes.profileImg}
                alt={`${user.displayName} profile`}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container>
                <Grid className={classes.noVertPad} item md={4} xs={12}>
                  <ListItem>
                    <ListItemText primary={user.displayName} secondary="Display Name" />
                  </ListItem>
                </Grid>
                <Grid className={classes.noVertPad} item md={4} xs={12}>
                  <ListItem>
                    <ListItemText
                      primary={`${user.lastName}, ${user.firstName}`}
                      secondary="Name"
                    />
                  </ListItem>
                </Grid>
              </Grid>
              <Grid container>
                <Grid className={classes.noVertPad} item md={4} xs={12}>
                  <ListItem>
                    <ListItemText primary={user.eId} secondary="eID" />
                  </ListItem>
                </Grid>
                <Grid className={classes.noVertPad} item md={4} xs={12}>
                  <ListItem>
                    <ListItemText
                      primary={user.csuId.toString().replace(/(.{3})/g, '$1 ')}
                      secondary="CSU ID"
                    />
                  </ListItem>
                </Grid>
              </Grid>
              <Grid container>
                <Grid className={classes.noVertPad} item xs={12}>
                  <ListItem>
                    <ListItemText primary={user.email} secondary="Email" />
                  </ListItem>
                </Grid>
              </Grid>
              {_.isEmpty(userGroups) ? null : (
                <Grid container>
                  <Grid item xs={12}>
                    <List disablePadding>
                      <Divider />
                      {userGroups.map(userGroup => (
                        <ListItem key={userGroup.alias}>
                          <ListItemText
                            primary={userGroup.alias}
                            secondary={userGroup.description}
                          />
                        </ListItem>
                      ))}
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
  dialogProps: PropTypes.node,
  iconOnly: PropTypes.bool,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAccount);