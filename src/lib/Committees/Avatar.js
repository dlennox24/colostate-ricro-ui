import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Committees from './';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 3,
  },
});

class CommitteeAvatar extends Component {
  render() {
    let {
      // classes,
      committee,
      size = 1,
    } = this.props;
    committee = Committees[committee];
    const baseSize = 40;
    const bgSize = size < 0 ? baseSize - Math.abs(size * baseSize) : Math.abs(size * baseSize);
    const iconSize = bgSize - (bgSize * .33);
    console.log('\n  s\t' + size, '\n bg\t' + bgSize.toFixed(1), '\n is\t' + iconSize.toFixed(1), '\nlog\t' + (10 * Math.log(bgSize)).toFixed(1));
    return (
      <Avatar
        style={{
          color: committee.iconColor,
          backgroundColor: committee.iconBgColor,
          height: bgSize + 'px',
          width: bgSize + 'px',
        }}
        >
        <FontAwesomeIcon
          icon={committee.icon}
          style={{
            height: iconSize + 'px',
            width: iconSize + 'px',
          }}
          />
      </Avatar>
    );
  }
}

CommitteeAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  committee: PropTypes.string.isRequired,
};

export default (withStyles(styles)(CommitteeAvatar));