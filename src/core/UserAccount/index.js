import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import userDefaultProfileImg from '../../assets/img/default-profile.svg';
import CloseableDialog from '../../component/CloseableDialog';
import DisplayName from './DisplayName';
import styles from './styles';

const UserAccount = ({ classes, onClose, open, user }) => {
  const userGroups = _.sortBy(user.userGroups, ['alias', 'userGroupTypeId']);
  return (
    <CloseableDialog header="Account" onClose={onClose} open={open} keepMounted>
      <DialogContent>
        <Grid container>
          <Grid className={classNames(classes.column, classes.profileImg)} item xs={12} md={3}>
            <img src={user.profileImg || userDefaultProfileImg} alt={user.displayName} />
            <Button
              className={classes.editProfileButton}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Change Profile Image
            </Button>
          </Grid>
          <Grid className={classes.column} item xs={12} md={9}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">Account</Typography>
                <Divider />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6} xs={12}>
                <DisplayName displayName={user.displayName} />
              </Grid>
              <Grid item md={6} xs={12}>
                <ListItem>
                  <ListItemText primary={`${user.lastName}, ${user.firstName}`} secondary="Name" />
                </ListItem>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6} xs={12}>
                <ListItem>
                  <ListItemText primary={user.eId} secondary="eID" />
                </ListItem>
              </Grid>
              <Grid item md={6} xs={12}>
                <ListItem>
                  <ListItemText
                    primary={user.csuId.toString().replace(/(.{3})/g, '$1 ')}
                    secondary="CSU ID"
                  />
                </ListItem>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <ListItem>
                  <ListItemText primary={user.email} secondary="Email" />
                </ListItem>
              </Grid>
            </Grid>
            {_.isEmpty(userGroups) ? null : (
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">Groups</Typography>
                  <Divider />
                  <List disablePadding>
                    {userGroups.map(userGroup => (
                      <ListItem key={userGroup.alias}>
                        <ListItemText primary={userGroup.alias} secondary={userGroup.description} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </CloseableDialog>
  );
};

UserAccount.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAccount);
