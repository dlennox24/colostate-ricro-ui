import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PropTypes from 'prop-types';
import React from 'react';

const NavListItemIcon = ({ children }) => (
  <ListItemIcon>{React.isValidElement(children) ? children : <Icon>{children}</Icon>}</ListItemIcon>
);

NavListItemIcon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default NavListItemIcon;
