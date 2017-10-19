import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
import $ from 'jquery';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Menu from 'material-ui/Menu';
import Tooltip from 'material-ui/Tooltip';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';

import Login from '../redux/Login';
import CsuSvgUnitLogo from './CsuSvgUnitLogo';
import linkTo from '../utils/linkTo.js';

const csuLogoBarHeight = 71;
const appBarHeight = 67;
const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  csuLogoBar: {
    marginBottom: appBarHeight,
    '& .responsiveLogoContainer': {
      padding: '5px 10px',
    },
  },
  headerBar: {
    top: csuLogoBarHeight,
    borderBottom: '3px solid ' + theme.palette.csuBrand.primary.gold,
  },
});

function stickyHeader(scrollTop, element) {
  let top;
  if (csuLogoBarHeight - scrollTop <= 0) {
    top = 0;
  } else {
    top = csuLogoBarHeight - scrollTop;
  }
  element.animate({
    top: top
  }, 0);
}

class Header extends Component {
  state = {
    more: {
      anchorEl: undefined,
      open: false,
    },
  }

  handleClick = event => {
    this.setState({
      more: {
        open: true,
        anchorEl: event.currentTarget,
      },
    });
  };

  handleRequestClose = event => {
    this.setState({
      more: {
        ...this.state.more,
        open: false,
      }
    });
  };

  componentWillMount() {
    document.title = document.title === '' ? this.props.appName + ' - ' + this.props.unit.title : document.title;
    stickyHeader($(this).scrollTop(), $('#headerBar'));
    $(window).scroll(function() {
      stickyHeader($(this).scrollTop(), $('#headerBar'));
    });
  }

  createMoreList = list => {
    if (!Array.isArray(list)) {
      console.error("Header: moreMenu not an array", list);
      return null;
    }
    if (list.length > 1) {
      list = list.map((item, i) => {
        let icon = null;
        if (item.icon != null) {
          icon = (
            <ListItemIcon>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
          )
        }
        return (
          <ListItem key={i} button onClick={linkTo.bind(this, item.link)}>
            {icon}
            <ListItemText inset primary={item.name} />
          </ListItem>
        );
      });
      return (
        <div key={2}>
          <IconButton
            id='more-menu-button'
            aria-owns='more-menu'
            aria-haspopup='true'
            onClick={this.handleClick}
            aria-label='More'
            >
            <Icon>more_vert</Icon>
          </IconButton>
          <Menu
            id='more-menu'
            anchorEl={this.state.more.anchorEl}
            open={this.state.more.open}
            onRequestClose={this.handleRequestClose}
            >
            {list}
          </Menu>
        </div>
      );
    } else if (list.length > 0) {
      let item = list[0];
      if (item.icon == null) {
        return (
          <Button key={item.name} onClick={linkTo.bind(this,item.link)}>
            {item.name}
          </Button>
        );
      }
      return (
        <Tooltip key={item.name} id="tooltip-icon" title={item.name} placement="bottom">
          <IconButton
            onClick={this.handleClick}
            aria-label={item.name}
            >
            <Icon>{item.icon}</Icon>
          </IconButton>
        </Tooltip>
      );
    } else {
      return null;
    }
  }

  render() {
    const classes = this.props.classes;
    const config = this.props.config;
    let defaultHeader = [];
    defaultHeader.push(
      <Typography
        key={defaultHeader.length}
        type='title'
        className={classes.flex}
        >
        {config.app.name}
      </Typography>,
    );
    if (config.app.header.login) {
      defaultHeader.push(<Login key={defaultHeader.length} height='64px'/>);
    }
    defaultHeader.push(this.createMoreList(config.app.header.moreMenu));

    return (
      <div className={classes.root}>
        <AppBar
          id='csuLogoBar'
          position='static'
          className={classes.csuLogoBar + (this.props.children === "none" ? ' mb-0' : '')}
          >
          <CsuSvgUnitLogo unit={config.unit} />
        </AppBar>
        {this.props.children === 'none' ? null : (
          <AppBar id='headerBar' position='fixed' color='default' className={classes.headerBar}>
            <Toolbar>
              {this.props.children == null ? defaultHeader : this.props.children}
            </Toolbar>
          </AppBar>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
