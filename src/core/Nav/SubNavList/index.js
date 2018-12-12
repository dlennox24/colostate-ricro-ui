import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import MdiIcon from '@mdi/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { matchPath, withRouter } from 'react-router-dom';
import { navItemShape } from '../../../assets/propTypes';
import NavList from '../NavList';
import styles from './styles';

class SubNavList extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggleDropDown = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { classes, depth, linkPrefix = '', location, navItem, nested, theme } = this.props;
    const { isOpen } = this.state;
    const active = matchPath(location.pathname, {
      path: linkPrefix + navItem.link,
      // exact: true,
    });
    return (
      <React.Fragment key={`subNav${navItem.name}`}>
        <ListItem
          key={navItem.name}
          className={classNames(active && classes.active)}
          onClick={this.handleToggleDropDown}
          dense={nested}
          button
        >
          <ListItemIcon>
            <Icon>
              <MdiIcon path={navItem.icon} color={theme.palette.icon.main} />
            </Icon>
          </ListItemIcon>
          <ListItemText primary={navItem.name} />
          <Icon>{isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</Icon>
        </ListItem>
        <Collapse className={classNames(depth < 2 && classes.dropDown)} in={isOpen}>
          <NavList
            linkPrefix={linkPrefix + navItem.link}
            nav={navItem.subNav}
            keyPrefix={`subNavList-${navItem.name}-`}
            depth={depth}
            denseList
            denseListItem
          />
        </Collapse>
      </React.Fragment>
    );
  }
}

SubNavList.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  depth: PropTypes.number,
  linkPrefix: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired, // react-router withRouter()
  navItem: navItemShape.isRequired,
  nested: PropTypes.bool,
  theme: PropTypes.object.isRequired, // MUI withTheme
};

export default withRouter(withStyles(styles, { withTheme: true })(SubNavList));
