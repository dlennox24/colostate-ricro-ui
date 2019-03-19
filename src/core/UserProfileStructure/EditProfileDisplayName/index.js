import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import IconPencil from 'mdi-material-ui/Pencil';
import PropTypes from 'prop-types';
import React from 'react';
import EditField from './EditField';

const styles = () => ({
  container: { width: '100%' },
});

class EditProfileDisplayName extends React.Component {
  state = {
    isEditOpen: false,
  };

  handleToggleOpen = () => {
    this.setState(state => ({
      isEditOpen: !state.isEditOpen,
    }));
  };

  render() {
    const { classes, user } = this.props;
    const { isEditOpen } = this.state;
    return (
      <List className={classes.container} disablePadding>
        <EditField isOpen={isEditOpen} onToggleOpen={this.handleToggleOpen} user={user} />
        <Collapse in={!isEditOpen}>
          <ListItem button onClick={this.handleToggleOpen}>
            <ListItemText primary={user.displayName} secondary="Display Name" />
            <ListItemSecondaryAction>
              <Tooltip title="Edit Display Name">
                <IconButton aria-label="Edit Display Name" onClick={this.handleToggleOpen}>
                  <IconPencil />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        </Collapse>
      </List>
    );
  }
}

EditProfileDisplayName.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfileDisplayName);
