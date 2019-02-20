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
import { userShape } from '../../assets/propTypes';
import EditProfileDisplayName from './EditProfileDisplayName';
import ProfileImage from './ProfileImage';
import styles from './styles';

class ProfileStructure extends React.Component {
  createGridArray = () => {
    const { loggedInUserId, user } = this.props;
    return [
      [
        {
          primary:
            user.csuId === loggedInUserId ? (
              <EditProfileDisplayName user={user} />
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
          <Grid
            key={cell.secondary}
            className={classNames(
              !React.isValidElement(cell.primary) && this.props.classes.gridFlex,
            )}
            item
            xs={12}
            md={12 / row.length}
          >
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
    const userGroups = _.sortBy(this.props.user.userGroups, ['alias', 'id']);
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
    const { classes, user } = this.props;
    return (
      <Grid container>
        <Grid className={classNames(classes.column, classes.profileImg)} item xs={12} md={4} lg={3}>
          <ProfileImage user={user} />
        </Grid>
        <Grid className={classes.column} item xs={12} md={8} lg={9}>
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
  loggedInUserId: PropTypes.number.isRequired, // redux state
  user: userShape.isRequired,
};

export default withStyles(styles)(ProfileStructure);
