import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  withStyles,
} from 'material-ui/styles';

import Footer from './Footer';
import CsuUnitHeader from './CsuUnitHeader';
import IeWarning from './IeWarning';
import AppWrapper from './appWrapper/AppWrapper';

const styles = theme => ({
  '@global': {
    body: {
      margin: 0,
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      fontFamily: '\'prox-regular\', \'Helvetica\', \'Arial\', sans-serif',
    },
    a: {
      textDecoration: 'none',
      color: theme.palette.secondary[500],
      '&:hover': {
        textDecoration: 'underline',
        color: theme.palette.primary[500],
      }
    },
    code: {
      padding: '0.2em 0.4em',
      margin: 0,
      fontSize: '85%',
      borderRadius: 3,
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.grey[800],
    },
    pre: {
      padding: '5px 10px',
      backgroundColor: theme.palette.grey[200],
      borderLeft: '4px solid ' + theme.palette.csuBrand.primary.green,
      color: theme.palette.grey[800],
      lineHeight: '1.2rem',
    },
    hr: {
      background: theme.palette.csuBrand.primary.gold,
      height: '.1rem',
      margin: 0,
    },
    '.listItemLink': {
      color: theme.palette.common.lightBlack,
      '&:hover': {
        color: theme.palette.common.lightBlack,
        textDecoration: 'none',
      },
    },
    '.sideNavSubMenu': {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    '.sideNavSubMenuClosed': {
      transition: theme.transitions.create('wdith', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  gutters: {
    margin: '1.5rem',
  },
  mainContent: {
    overflow: 'auto',
  },
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
});

class AppTemplate extends Component {
  render() {
    const {
      classes,
      config,
      disableGutters,
      style,
      children,
      sideNav
    } = this.props;
    return (
      <div className={classes.root}>
        <CsuUnitHeader unit={config.unit}/>
        <AppWrapper config={config} sideNav={sideNav}>
          <main
            id='main-content'
            className={classnames(classes.mainContent,!disableGutters && classes.gutters)}
            style={style}
            >
            <IeWarning/>
            {children}
          </main>
        </AppWrapper>
        <Footer/>
      </div>
    );
  }
}

AppTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  disableGutters: PropTypes.bool,
  reduxMiddleware: PropTypes.func,
  sideNav: PropTypes.func,
};

export default withStyles(styles)(AppTemplate);