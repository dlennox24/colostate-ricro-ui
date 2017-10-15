import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
import Button from 'material-ui/Button';

import CsuDialog from './Dialog';

const styles = theme => ({});

class UserAccount extends Component {
  state = {
    open: false,
  }
  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    const classes = this.props.classes;
    return (
      <CsuDialog title='User Account'>
        body
      </CsuDialog>
    );
  }
}

UserAccount.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  cardActions: PropTypes.node,
  alignCARight: PropTypes.bool,
};

export default withStyles(styles)(UserAccount);
