import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Portal from '@material-ui/core/Portal';
import Snackbar from '@material-ui/core/Snackbar';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import MdiPlus from 'mdi-material-ui/Plus';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CloseableDialog from '../../component/CloseableDialog';
import IconSnackbarContent from '../../component/IconSnackbarContent';
import LoadingIndicator from '../../component/LoadingIndicator';

const styles = () => ({
  noGroupsAvailable: {
    justifyContent: 'center',
    alignCtems: 'center',
    display: 'flex',
  },
});

class AddGroup extends React.Component {
  state = {
    userGroups: [],
    isLoading: true,
    snackbar: {
      open: false,
      variant: 'default',
      message: '',
    },
    oldUserGroups: this.props.userGroups,
  };

  componentDidUpdate() {
    const { open, userGroups } = this.props;
    const { isLoading, oldUserGroups } = this.state;
    if ((open && !_.isEqual(userGroups, oldUserGroups)) || isLoading) {
      this.props.api.axios
        .get('/nucleus/groups/')
        .then(resp => {
          this.setState({
            isLoading: false,
            userGroups: _.differenceWith(resp.data.result, userGroups, (a, b) => {
              delete a.userCount;
              delete a.users;
              return _.isEqual(a, b);
            }),
            oldUserGroups: userGroups,
          });
        })
        .catch(err => {
          const message = _.get(err, 'response.data.result', 'Failed to fetch group types');
          this.setState({
            isLoading: false,
            snackbar: {
              isOpen: true,
              variant: 'error',
              message,
            },
          });
        });
    }
  }

  handleAddGroup = group => () => {
    const { addGroup, api, csuId } = this.props;
    api.axios
      .get('/nucleus/groups/add-user/', {
        params: {
          csuId,
          groupId: group.id,
        },
      })
      .then(() => {
        this.setState(state => ({
          snackbar: {
            isOpen: true,
            variant: 'success',
            message: 'Group added',
          },
          userGroups: state.userGroups.filter(g => g.id !== group.id),
        }));
        addGroup(group);
      })
      .catch(err => {
        const message = _.get(err, 'response.data.result', 'Failed to add group');
        this.setState({
          snackbar: {
            isOpen: true,
            variant: 'error',
            message,
          },
        });
      });
  };

  handleCloseSnackbar = () => {
    this.setState(state => ({ snackbar: { ...state.snackbar, isOpen: false } }));
  };

  addGroup = groupToAdd => () => {
    this.setState(state => {
      state.userGroups.filter(group => group.id !== groupToAdd.id);
    });
  };

  render() {
    const { classes, handleClose, open } = this.props;
    const { userGroups, isLoading, snackbar } = this.state;

    return (
      <React.Fragment>
        <CloseableDialog header="Add Group" onClose={handleClose} open={open} maxWidth="sm">
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <List>
              {userGroups.length === 0 && (
                <Typography className={classes.noGroups} variant="button">
                  No groups available to add
                </Typography>
              )}
              {userGroups.map(group => (
                <ListItem button divider key={group.id} onClick={this.handleAddGroup(group)}>
                  <ListItemText primary={group.alias} secondary={group.description} />
                  <ListItemSecondaryAction>
                    <Tooltip title="Add group to user">
                      <IconButton onClick={this.handleAddGroup(group)}>
                        <MdiPlus />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
        </CloseableDialog>
        <Portal>
          <Snackbar
            open={snackbar.isOpen}
            autoHideDuration={6e3}
            onClose={this.handleCloseSnackbar}
          >
            <IconSnackbarContent variant={snackbar.variant} message={snackbar.message} />
          </Snackbar>
        </Portal>
      </React.Fragment>
    );
  }
}

AddGroup.propTypes = {
  addGroup: PropTypes.func.isRequired,
  api: PropTypes.object.isRequired, // redux state
  classes: PropTypes.object.isRequired, // MUI withStyles()
  csuId: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  userGroups: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ api: state.config.api });
export default connect(mapStateToProps)(withStyles(styles)(AddGroup));
