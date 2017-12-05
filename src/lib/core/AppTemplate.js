import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  withStyles,
} from 'material-ui/styles';

import Footer from './Footer';
import CsuUnitHeader from './CsuUnitHeader';
import IeWarning from './IeWarning';
import AppWrapper from './wrapper/AppWrapper';

const styles = theme => ({
  '@global': {
    body: {
      margin: 0,
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      fontFamily: "\"prox-regular\", \"Helvetica\", \"Arial\", sans-serif",
    },
    a: {
      color: theme.palette.secondary[500],
      '&:hover': {
        color: theme.palette.primary[500],
      }
    },
    hr: {
      background: theme.palette.csuBrand.primary.gold,
      height: '.1rem',
      margin: 0,
    },
  },
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }
});

class AppTemplate extends Component {
  render() {
    const {
      classes,
      config,
      header,
      noGutters,
      style,
      children,
    } = this.props;
    return (
      <div className={classes.root}>
        <CsuUnitHeader config={config}>
          {header}
        </CsuUnitHeader>
        <AppWrapper config={config}>
        <main
          id='main-content'
          className={noGutters ? null : 'container-fluid p-4'}
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
  config: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  reduxMiddleware: PropTypes.func,
  header: PropTypes.node,
  noGutters: PropTypes.bool,
};

export default withStyles(styles)(AppTemplate);
