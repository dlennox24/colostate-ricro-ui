import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles';
import $ from 'jquery';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Menu from 'material-ui/Menu';
import Button from 'material-ui/Button';
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui/List';

import CsuSvgUnitLogo from './CsuSvgUnitLogo';
import linkTo from './utils/linkTo.js';
import defaultProfileImg from './assets/images/default-profile.png';

const csuLogoBarHeight = 61;
const styleSheet = createStyleSheet('CsuHeader', {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  csuLogoBar: {
    marginBottom: csuLogoBarHeight,
  },
  headerBar: {
    marginTop: csuLogoBarHeight,
  },
  account: {
    marginRight: 0,
    height: '40px',
    width: '40px',
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
    account: {
      anchorEl: undefined,
      open: false,
    },
  }

  handleClick = event => {
    console.log(event.currentTarget.id);
    let state;
    switch (event.currentTarget.id) {
      case 'account-menu-button':
        state = {
          account: {
            open: true,
            anchorEl: event.currentTarget,
          },
        }
        break;
      case 'more-menu-button':
        state = {
          more: {
            open: true,
            anchorEl: event.currentTarget,
          },
        }
        break;
      default:
        state = this.state;
    }
    this.setState(state);
  };

  handleRequestClose = event => {
    this.setState({
      more: {
        ...this.state.more,
        open: false,
      },
      account: {
        ...this.state.account,
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
      (
        _.isEmpty(this.props.user) ?
        <Button>login</Button> :
        (<div key={1}>
          <ListItem
            id='account-menu-button'
            aria-owns='account-menu'
            aria-haspopup='true'
            onClick={this.handleClick}
            aria-label='Account'
            button
            dense
            >
            <ListItemIcon>
              <Avatar className={classes.account} src={defaultProfileImg} />
            </ListItemIcon>
            <ListItemText
              primary={this.props.user.first_name + ' ' + this.props.user.last_name}
              secondary={this.props.user.eId.toString().replace(/(.{3})/g, '$1 ')}
              />
          </ListItem>
          <Menu
            id='account-menu'
            anchorEl={this.state.account.anchorEl}
            open={this.state.account.open}
            onRequestClose={this.handleRequestClose}
            >
            <ListItem button onClick={this.handleRequestClose}>
              <ListItemIcon>
                <Icon>account_circle</Icon>
              </ListItemIcon>
              <ListItemText inset primary='Account Settings' />
            </ListItem>
            <ListItem button onClick={this.handleRequestClose}>
              <ListItemIcon>
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText inset primary='Logout' />
            </ListItem>
          </Menu>
        </div>)
      ),
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
  user: PropTypes.object,
};

export default withStyles(styleSheet)(CsuHeader);
withStyles(styleSheet)(CsuHeader);
