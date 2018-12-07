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
import styles from './styles';

const NavList = ({ classes, nav, theme }) => {
  return (
    <div className={classes.root}>
      {nav.map((list, i) => {
        return (
          <React.Fragment key={`navList-${list[0].name}`}>
            <List>
              {list.map(navItem => {
                if (React.isValidElement(navItem)) {
                  return <React.Fragment key={navItem}>{navItem}</React.Fragment>;
                }
                return (
                  <ListItem button key={navItem.name}>
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
  nav: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired, // MUI withTheme
};

export default withStyles(styles, { withTheme: true })(NavList);
