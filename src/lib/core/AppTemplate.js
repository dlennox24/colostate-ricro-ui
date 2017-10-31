import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  withStyles,
} from 'material-ui/styles';

import Footer from './Footer';
import Header from './Header';
import IeWarning from './IeWarning';

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
      overflowX: 'auto',
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
        <Header config={this.props.config}>
          {this.props.header}
        </Header>
        <main
          id='main-content'
          className={this.props.noGutters ? null : 'container-fluid p-4'}
          style={this.props.style}
          >
          <IeWarning/>
          {this.props.children}
        </main>
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
