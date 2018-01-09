import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Committees from './';

class CommitteeAvatar extends Component {
  render() {
    let {
      committee,
      size = 1,
    } = this.props;
    committee = Committees[committee];
    const baseSize = 32;
    const bgSize = size < 0 ? baseSize - Math.abs(size * baseSize) : Math.abs(size * baseSize);
    const iconSize = bgSize - (bgSize * .33);

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
  committee: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default CommitteeAvatar;