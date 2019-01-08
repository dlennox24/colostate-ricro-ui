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

const NavList = ({
  classes,
  className,
  depth = 0,
  denseList,
  denseListItem,
  id,
  keyPrefix = 'navList-',
  linkPrefix = '',
  nav,
  location,
  setMobileOpen,
}) => {
  return (
    <div id={id} className={classNames(classes.root, className)}>
      {nav.map((list, i) => {
        return (
          <React.Fragment key={`${keyPrefix}${list[0].name}`}>
            <List className={classNames(denseList && classes.subNavList)} dense={denseList}>
              {list.map(navItem => {
                const key = `listItem-${navItem.name}`;
                if (React.isValidElement(navItem)) {
                  return <React.Fragment key={key}>{navItem}</React.Fragment>;
                }

                if (Array.isArray(navItem.subNav)) {
                  return (
                    <SubNavList
                      key={key}
                      depth={depth + 1}
                      navItem={navItem}
                      nested={denseListItem}
                      linkPrefix={linkPrefix}
                      setMobileOpen={setMobileOpen}
                    />
                  );
                }

                const active = matchPath(location.pathname, {
                  path: linkPrefix + navItem.link,
                  exact: true,
                });
                return (
                  <ListItem
                    key={key}
                    className={classNames(active && classes.active)}
                    button
                    dense={denseListItem}
                    onClick={setMobileOpen && setMobileOpen(false)}
                    {...createMuiComponentLink(navItem, linkPrefix)}
                  >
                    {navItem.icon && <NavListItemIcon>{navItem.icon}</NavListItemIcon>}
                    <ListItemText primary={navItem.name} />
                  </ListItem>
                );
              })}
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
  location: PropTypes.object.isRequired, // react-router withRouter()
  nav: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, navItemShape.isRequired])),
  ).isRequired,
  setMobileOpen: PropTypes.func,
};

export default withRouter(withStyles(styles)(NavList));
