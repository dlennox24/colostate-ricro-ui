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
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Menu from 'material-ui/Menu';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';

import Login from '../redux/Login';
import CsuSvgUnitLogo from './CsuSvgUnitLogo';
import linkTo from '../utils/linkTo.js';

const csuLogoBarHeight = 71;
const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  csuLogoBar: {
    marginBottom: csuLogoBarHeight,
    '& .responsiveLogoContainer': {
      padding: '5px 10px',
    },
  },
  headerBar: {
    marginTop: csuLogoBarHeight,
    borderBottom: '3px solid ' + theme.palette.csuBrand.primary.gold,
  },
});

function stickyHeader(scrollTop, element) {
  let margin;
  if (scrollTop <= csuLogoBarHeight) {
    if (csuLogoBarHeight - scrollTop === 0) {
      margin = '';
    } else {
      margin = csuLogoBarHeight - scrollTop;
    }
  } else {
    margin = 0
  }
  element.animate({
    marginTop: margin
  }, 15);
}

class CsuHeader extends Component {
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
    $('body').on({
      'touchmove': function(e) {
        stickyHeader($(this).scrollTop(), $('#headerBar'))
      }
    });
    $(window).scroll(function() {
      stickyHeader($(this).scrollTop(), $('#headerBar'))
    });
  }

  render() {
    const classes = this.props.classes;
    const defaultHeader = [
      (<Typography
        key={0}
        type='title'
        className={classes.flex}
        >
        {this.props.appName}
      </Typography>),
      <Login key={1} height='64px'/>,
      (<div key={2}>
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
          <ListItem button onClick={linkTo.bind(this, '/')}>
            <ListItemIcon>
              <Icon>home</Icon>
            </ListItemIcon>
            <ListItemText inset primary='Home' />
          </ListItem>
          <ListItem button onClick={linkTo.bind(this, this.props.unit.contactHref)}>
            <ListItemIcon>
              <Icon>email</Icon>
            </ListItemIcon>
            <ListItemText inset primary='Contact Us' />
          </ListItem>
        </Menu>
      </div>),
    ];

    return (
      <div className={classes.root}>
        <AppBar id='csuLogoBar' position='static' className={classes.csuLogoBar}>
          <CsuSvgUnitLogo unit={this.props.unit} />
        </AppBar>
        <AppBar id='headerBar' color='default' className={classes.headerBar}>
          <Toolbar>
            {this.props.children == null ? defaultHeader : this.props.children}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

CsuHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  unit: PropTypes.object.isRequired,
};

export default withStyles(styles)(CsuHeader);
