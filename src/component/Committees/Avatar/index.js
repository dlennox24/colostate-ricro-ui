import Avatar from '@material-ui/core/Avatar';
import MdiIcon from '@mdi/react';
import PropTypes from 'prop-types';
import React from 'react';
import Committees from '..';

const CommitteeAvatar = props => {
  const { className, size = 1 } = props;
  const committee = Committees[props.committee];
  const baseSize = 32;
  const bgSize = size < 0 ? baseSize - Math.abs(size * baseSize) : Math.abs(size * baseSize);
  const iconSize = bgSize - bgSize * 0.43;

  return (
    <Avatar
      className={className}
      style={{
        backgroundColor: committee.iconBgColor,
        height: `${bgSize}px`,
        width: `${bgSize}px`,
      }}
    >
      <MdiIcon
        path={committee.icon}
        color={committee.iconColor}
        style={{ height: `${iconSize}px`, width: `${iconSize}px` }}
      />
    </Avatar>
  );
};

CommitteeAvatar.propTypes = {
  className: PropTypes.string,
  committee: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default CommitteeAvatar;
