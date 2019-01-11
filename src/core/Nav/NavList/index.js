import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { matchPath, withRouter } from 'react-router-dom';
import { navItemShape } from '../../../assets/propTypes';
import createMuiComponentLink from '../../../utils/createMuiComponentLink';
import NavListItemIcon from '../NavListItemIcon';
import SubNavList from '../SubNavList';
import styles from './styles';

const createNavItem = (navItem, props) => {
  const key = `listItem-${navItem.name}`;
  if (React.isValidElement(navItem)) {
    return <React.Fragment key={key}>{navItem}</React.Fragment>;
  }
  if (Array.isArray(navItem.subNav)) {
    return (
      <SubNavList
        key={key}
        depth={props.depth + 1}
        navItem={navItem}
        nested={props.denseListItem}
        linkPrefix={props.linkPrefix}
        setMobileOpen={props.setMobileOpen}
        ListProps={props.listProps}
      />
    );
  }
  return (
    <ListItem
      key={key}
      className={classNames(
        matchPath(props.location.pathname, {
          path: props.linkPrefix + navItem.link,
          exact: true,
        }) && props.classes.active,
      )}
      dense={props.denseListItem}
      onClick={() => {
        if (props.setMobileOpen) props.setMobileOpen(false);
        if (navItem.onClick) navItem.onClick();
      }}
      disabled={navItem.disabled}
      button
      {...createMuiComponentLink(navItem, props.linkPrefix)}
    >
      {navItem.icon && <NavListItemIcon>{navItem.icon}</NavListItemIcon>}
      <ListItemText primary={navItem.name} />
    </ListItem>
  );
};

const NavList = props => {
  const {
    classes,
    className,
    depth = 0,
    denseList,
    denseListItem,
    id,
    keyPrefix = 'navList-',
    linkPrefix = '',
    nav,
    listProps = {},
    location,
    setMobileOpen,
  } = props;

  return (
    <div id={id} className={classNames(classes.root, className)}>
      {nav.map((list, i) => {
        return (
          <React.Fragment key={`${keyPrefix}${list[0].name}`}>
            <List
              className={classNames(denseList && classes.subNavList)}
              dense={denseList}
              {...listProps}
            >
              {list.map(navItem =>
                createNavItem(navItem, {
                  classes,
                  depth,
                  denseListItem,
                  linkPrefix,
                  location,
                  setMobileOpen,
                  listProps,
                }),
              )}
            </List>
            {i !== nav.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

NavList.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  className: PropTypes.string,
  denseList: PropTypes.bool,
  denseListItem: PropTypes.bool,
  depth: PropTypes.number,
  id: PropTypes.string,
  keyPrefix: PropTypes.string,
  linkPrefix: PropTypes.string,
  listProps: PropTypes.object,
  location: PropTypes.object.isRequired, // react-router withRouter()
  nav: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, navItemShape.isRequired])),
  ).isRequired,
  setMobileOpen: PropTypes.func,
};

export default withRouter(withStyles(styles)(NavList));
