import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import IconChevronDown from 'mdi-material-ui/ChevronDown';
import IconChevronUp from 'mdi-material-ui/ChevronUp';
import PropTypes from 'prop-types';
import React from 'react';
import { matchPath, withRouter } from 'react-router-dom';
import { navItemShape } from '../../../assets/propTypes';
// eslint-disable-next-line import/no-cycle
import NavList from '../NavList';
import NavListItemIcon from '../NavListItemIcon';
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
    const {
      classes,
      depth,
      linkPrefix = '',
      listProps,
      location,
      navItem,
      nested,
      setMobileOpen,
    } = this.props;
    const { isOpen } = this.state;
    const active = matchPath(location.pathname, {
      path: linkPrefix + navItem.link,
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
          {navItem.icon && <NavListItemIcon>{navItem.icon}</NavListItemIcon>}
          <ListItemText primary={navItem.name} />
          {isOpen ? <IconChevronUp /> : <IconChevronDown />}
        </ListItem>
        <Collapse className={classNames(depth < 2 && classes.dropDown)} in={isOpen}>
          <NavList
            linkPrefix={linkPrefix + navItem.link}
            nav={navItem.subNav}
            keyPrefix={`subNavList-${navItem.name}-`}
            depth={depth}
            setMobileOpen={setMobileOpen}
            listProps={listProps}
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
  listProps: PropTypes.object,
  location: PropTypes.object.isRequired, // react-router withRouter()
  navItem: navItemShape.isRequired,
  nested: PropTypes.bool,
  setMobileOpen: PropTypes.func,
};

export default withRouter(withStyles(styles)(SubNavList));
