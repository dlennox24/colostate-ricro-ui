import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import IconPencil from 'mdi-material-ui/Pencil';
import PropTypes from 'prop-types';
import React from 'react';

const EditProfileDisplayName = ({ displayName }) => (
  <List disablePadding>
    <ListItem>
      <ListItemText primary={displayName} secondary="Display Name" />
      <ListItemSecondaryAction>
        <Tooltip title="Edit Display Name">
          <IconButton aria-label="Edit Display Name">
            <IconPencil />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  </List>
);

EditProfileDisplayName.propTypes = {
  displayName: PropTypes.string.isRequired,
};

export default EditProfileDisplayName;
