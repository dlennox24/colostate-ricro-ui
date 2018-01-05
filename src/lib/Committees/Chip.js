import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';

import Committees from './';
import CommitteeAvatar from './Avatar';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 3,
  },
});

class CommitteeChip extends Component {
  render() {
    let {
      classes,
      committee,
    } = this.props;
    committee = Committees[committee];
    return (
      <Tooltip title={committee.name}>
        <Chip
          avatar={<CommitteeAvatar committee={committee.alias.toLowerCase()}/>}
          label={(
            <Typography type='body1' style={{color: committee.textColor}}>
              {committee.alias}
            </Typography>
          )}
          className={classes.chip}
          style={{backgroundColor: committee.bgColor}}
          />
      </Tooltip>
    );
  }
}

CommitteeChip.propTypes = {
  classes: PropTypes.object.isRequired,
  committee: PropTypes.string.isRequired,
};

export default (withStyles(styles)(CommitteeChip));