import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
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

import CsuSvgUnitLogo from './CsuSvgUnitLogo';

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
});

function stickyHeader(scrollTop, element) {
  let margin;
  console.log(scrollTop);
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
      <Typography key={0} type="title" className={classes.flex}>{this.props.appName}</Typography>,
      (<div key={1}>
        <IconButton href='/' aria-label='Home'>
          <Icon>home</Icon>
        </IconButton>
        <IconButton href={this.props.unit.contactHref} aria-label='Contact us'>
          <Icon>email</Icon>
        </IconButton>
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

export default withStyles(styleSheet)(CsuHeader);
