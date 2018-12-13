import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Committees from '..';

const CommitteeAvatar = ({ className, committee, size = 1 }) => {
  const committeeObj = Committees[committee];
  const baseSize = 32;
  const bgSize = size < 0 ? baseSize - Math.abs(size * baseSize) : Math.abs(size * baseSize);
  const iconSize = bgSize - bgSize * 0.35;
  const style = {
    height: `${iconSize}px`,
    width: `${iconSize}px`,
    color: committeeObj.iconColor,
  };
  return (
    <Avatar
      className={classNames(className)}
      style={{
        backgroundColor: committeeObj.iconBgColor,
        height: `${bgSize}px`,
        width: `${bgSize}px`,
      }}
    >
      {React.cloneElement(committeeObj.icon, { style })}
    </Avatar>
  );
};

CommitteeAvatar.propTypes = {
  className: PropTypes.string,
  committee: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default CommitteeAvatar;
