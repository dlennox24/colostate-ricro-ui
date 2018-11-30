import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import PropTypes from 'prop-types';

const DisplayName = ({ displayName }) => (
  <List>
    <ListItem button>
      <ListItemText primary={displayName} secondary="Display Name" />
      <ListItemSecondaryAction>
        <Tooltip title="Edit Display Name">
          <IconButton aria-label="Delete">
            <Icon>edit</Icon>
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  </List>
);

DisplayName.propTypes = {
  displayName: PropTypes.string.isRequired,
};

export default DisplayName;
