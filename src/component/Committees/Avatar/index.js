import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Committees from '..';

const TooltipWrapper = ({ children, disableTooltip, title }) =>
  disableTooltip ? children : <Tooltip title={title}>{children}</Tooltip>;

TooltipWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  disableTooltip: PropTypes.bool,
  title: PropTypes.string,
};

const CommitteeAvatar = ({ className, committee, disableTooltip, size = 1 }) => {
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
    <TooltipWrapper title={committeeObj.name} disableTooltip={disableTooltip}>
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
    </TooltipWrapper>
  );
};

CommitteeAvatar.propTypes = {
  className: PropTypes.string,
  committee: PropTypes.string.isRequired,
  disableTooltip: PropTypes.bool,
  size: PropTypes.number,
};

export default CommitteeAvatar;
