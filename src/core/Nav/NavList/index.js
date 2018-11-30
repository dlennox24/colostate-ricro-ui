import { Icon } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const NavList = ({ classes, nav }) => {
  return (
    <div className={classes.root}>
      {nav.map((list, i) => {
        return (
          <React.Fragment key={`navList-${list[0].name}`}>
            <List>
              {list.map(navItem => {
                if (React.isValidElement(navItem)) {
                  return navItem;
                }
                return (
                  <ListItem button key={navItem.name}>
                    <ListItemIcon>{navItem.icon}</ListItemIcon>
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
  classes: PropTypes.object.isRequired,
  nav: PropTypes.array.isRequired,
};

export default withStyles(styles)(NavList);
