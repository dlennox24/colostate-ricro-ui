import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import MdiIcon from '@mdi/react';
import PropTypes from 'prop-types';
import React from 'react';
import { navItemShape } from '../../../assets/propTypes';
import createMuiComponentLink from '../../../utils/createMuiComponentLink';
import SubNavList from '../SubNavList';
import styles from './styles';

const NavList = ({
  classes,
  depth = 0,
  denseList,
  denseListItem,
  keyPrefix = 'navList-',
  nav,
  theme,
}) => {
  return (
    <div className={classes.root}>
      {nav.map((list, i) => {
        return (
          <React.Fragment key={`${keyPrefix}${list[0].name}`}>
            <List dense={denseList}>
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
                    />
                  );
                }

                return (
                  <ListItem
                    key={key}
                    button
                    dense={denseListItem}
                    {...createMuiComponentLink(navItem)}
                  >
                    <ListItemIcon>
                      <Icon>
                        <MdiIcon path={navItem.icon} color={theme.palette.icon.main} />
                      </Icon>
                    </ListItemIcon>
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
  denseList: PropTypes.bool,
  denseListItem: PropTypes.bool,
  depth: PropTypes.number,
  keyPrefix: PropTypes.string,
  nav: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, navItemShape.isRequired])),
  ).isRequired,
  theme: PropTypes.object.isRequired, // MUI withTheme
};

export default withStyles(styles, { withTheme: true })(NavList);
