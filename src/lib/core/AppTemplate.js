import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  withStyles,
} from 'material-ui/styles';

import CsuFooter from './CsuFooter';
import CsuHeader from './CsuHeader';

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
    '#main-content': {
      flex: 1,
      width: '100%',
    },
    '#root, #root>div': {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    },
    '.v-gutters': {
      margins: '10px 0',
    },
  },
});

class AppTemplate extends Component {
  render() {
    return (
      <div>
        <CsuHeader
          unit={this.props.config.unit}
          appName={this.props.config.app.name}
          >
          {this.props.header}
        </CsuHeader>
        <main id='main-content' className='container-fluid p-4' style={this.props.style}>
          {this.props.children}
        </main>
        <CsuFooter/>
      </div>
    );
  }
}

AppTemplate.propTypes = {
  config: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  reduxMiddleware: PropTypes.func,
  user: PropTypes.object,
};

export default withStyles(styles)(AppTemplate);
