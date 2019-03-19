import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Portal from '@material-ui/core/Portal';
import Snackbar from '@material-ui/core/Snackbar';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import _ from 'lodash';
import MdiDelete from 'mdi-material-ui/Delete';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userShape } from '../../assets/propTypes';
import IconSnackbarContent from '../../component/IconSnackbarContent';
import AddGroup from './AddGroup';
import EditProfileDisplayName from './EditProfileDisplayName';
import ProfileImage from './ProfileImage';
import styles from './styles';

class ProfileStructure extends React.Component {
  state = {
    isAddGroupOpen: false,
    userGroups: this.props.user.userGroups,
    snackbar: {
      open: false,
      variant: 'default',
      message: '',
    },
  };

  createGridArray = () => {
    const { loggedInUser, user } = this.props;

    const userGroups = _.get(loggedInUser, 'userGroups', []);
    const canEdit =
      userGroups.filter(group => group.id === 'nucleusAdmin').length === 1 ||
      _.get(loggedInUser, 'csuId', -1) === user.csuId;

    return [
      [
        {
          primary: user.displayName,
          secondary: 'Display Name',
          component: canEdit && <EditProfileDisplayName user={user} />,
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
      [
        {
          primary: <Link href={`mailto:${user.email}`}>{user.email}</Link>,
          secondary: 'Email',
        },
      ],
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
            {React.isValidElement(cell.component) ? (
              cell.component
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

  handleRemoveGroup = groupId => () => {
    const { csuId } = this.props.user;
    this.props.api.axios
      .get('/nucleus/groups/remove-user/', { params: { csuId, groupId } })
      .then(() => {
        this.setState(state => ({
          snackbar: {
            isOpen: true,
            variant: 'success',
            message: 'Group removed',
          },
          userGroups: state.userGroups.filter(group => group.id !== groupId),
        }));
      })
      .catch(err => {
        this.setState({
          snackbar: {
            isOpen: true,
            variant: 'error',
            message: _.get(err, 'response.data.result', 'Failed to remove user'),
          },
        });
      });
  };

  addGroup = group => {
    this.setState(state => ({ userGroups: [...state.userGroups, group] }));
  };

  createGroupsSection = () => {
    const userGroups = _.sortBy(this.state.userGroups, ['alias', 'id']);
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
            <ListItemSecondaryAction>
              <Tooltip placement="left" title="Remove group from user">
                <IconButton onClick={this.handleRemoveGroup(userGroup.id)}>
                  <MdiDelete />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  };

  createSectionArray = () => {
    return [
      { label: 'Account', createFunc: this.createAccountSection },
      {
        label: 'Groups',
        createFunc: this.createGroupsSection,
        button: _.get(this.props.loggedInUser, 'userGroups', []).filter(
          group => group.id === 'nucleusAdmin',
        ).length === 1 && (
          <div>
            <Button onClick={this.handleOpenAddGroup} variant="outlined">
              Add Group
            </Button>
          </div>
        ),
      },
    ];
  };

  onCloseAddGroup = () => {
    this.setState({ isAddGroupOpen: false });
  };

  handleOpenAddGroup = () => {
    this.setState({ isAddGroupOpen: true });
  };

  handleCloseSnackbar = () => {
    this.setState(state => ({ snackbar: { ...state.snackbar, isOpen: false } }));
  };

  render() {
    const { classes, user } = this.props;
    const { snackbar } = this.state;
    return (
      <Grid container>
        <Grid className={classNames(classes.column, classes.profileImg)} item xs={12} md={4} lg={3}>
          <ProfileImage user={user} />
        </Grid>
        <Grid className={classes.column} item xs={12} md={8} lg={9}>
          {this.createSectionArray().map(section => (
            <React.Fragment key={section.label}>
              <Toolbar className={classes.sectionHeader}>
                <Typography variant="h5">{section.label}</Typography>
                {section.button}
              </Toolbar>
              <Divider />
              {section.createFunc()}
            </React.Fragment>
          ))}
          <Portal>
            <Snackbar
              open={snackbar.isOpen}
              autoHideDuration={6e3}
              onClose={this.handleCloseSnackbar}
            >
              <IconSnackbarContent variant={snackbar.variant} message={snackbar.message} />
            </Snackbar>
          </Portal>
          <AddGroup
            addGroup={this.addGroup}
            csuId={user.csuId}
            handleClose={this.onCloseAddGroup}
            open={this.state.isAddGroupOpen}
            userGroups={this.state.userGroups}
          />
        </Grid>
      </Grid>
    );
  }
}

ProfileStructure.propTypes = {
  api: PropTypes.object.isRequired, // redux state
  classes: PropTypes.object.isRequired, // MUI withStyles()
  loggedInUser: PropTypes.shape({
    csuId: PropTypes.number.isRequired,
  }), // redux state
  user: userShape.isRequired,
};

const mapStateToProps = state => ({ api: state.config.api, loggedInUser: state.user });
export default connect(mapStateToProps)(withStyles(styles)(ProfileStructure));
