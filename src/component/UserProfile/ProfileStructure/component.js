import Button from '@material-ui/core/Button';
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
import userDefaultProfileImg from '../../../assets/img/default-profile.svg';
import { userShape } from '../../../assets/propTypes';
import EditProfileDisplayName from '../../../core/EditProfileDisplayName';
import styles from './styles';

class ProfileStructure extends React.Component {
  createGridArray = () => {
    const { currentUserId = -1, user } = this.props;
    return [
      [
        {
          primary:
            user.csuId === currentUserId ? (
              <EditProfileDisplayName displayName={user.displayName} />
            ) : (
              user.displayName
            ),
          secondary: 'Display Name',
        },
        { primary: `${user.lastName}, ${user.firstName}`, secondary: 'Name' },
      ],
      [
        { primary: user.eId, secondary: 'eID' },
        {
          primary: user.csuId.toString().replace(/(.{3})/g, '$1 '),
          secondary: 'CSU ID',
        },
      ],
      [{ primary: user.email, secondary: 'Email' }],
    ];
  };

  createAccountSection = () => {
    return this.createGridArray().map(row => (
      <Grid key={row[0].secondary} container>
        {row.map(cell => (
          <Grid key={cell.secondary} item xs={12} md={12 / row.length}>
            {React.isValidElement(cell.primary) ? (
              cell.primary
            ) : (
              <ListItem component="div">
                <ListItemText primary={cell.primary} secondary={cell.secondary} />
              </ListItem>
            )}
          </Grid>
        ))}
      </Grid>
    ));
  };

  createGroupsSection = () => {
    let userGroups = _.sortBy(this.props.user.userGroups, ['alias', 'userGroupTypeId']);
    userGroups = [];
    return _.isEmpty(userGroups) ? (
      <Typography
        className={this.props.classes.noGroups}
        variant="button"
        align="center"
        paragraph
        component="p"
      >
        No Groups Associated with This User
      </Typography>
    ) : (
      <List disablePadding>
        {userGroups.map(userGroup => (
          <ListItem key={userGroup.alias}>
            <ListItemText primary={userGroup.alias} secondary={userGroup.description} />
          </ListItem>
        ))}
      </List>
    );
  };

  render() {
    const { classes, currentUserId = -1, user } = this.props;
    return (
      <Grid container>
        <Grid className={classNames(classes.column, classes.profileImg)} item xs={12} md={3}>
          <img src={user.profileImg || userDefaultProfileImg} alt={user.displayName} />
          {user.csuId === currentUserId && (
            <Button
              className={classes.editProfileButton}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Change Profile Image
            </Button>
          )}
        </Grid>
        <Grid className={classes.column} item xs={12} md={9}>
          {[
            { label: 'Account', createFunc: this.createAccountSection },
            { label: 'Groups', createFunc: this.createGroupsSection },
          ].map(section => (
            <React.Fragment key={section.label}>
              <Typography variant="h5">{section.label}</Typography>
              <Divider />
              {section.createFunc()}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    );
  }
}

ProfileStructure.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  currentUserId: PropTypes.number, // redux state
  user: userShape.isRequired,
};

export default withStyles(styles)(ProfileStructure);
