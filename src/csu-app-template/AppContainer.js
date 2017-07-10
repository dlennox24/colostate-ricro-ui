import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles';

import CsuFooter from './CsuFooter';
import CsuHeader from './CsuHeader';

import './AppContainer.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const styleSheet = createStyleSheet('AppContainer', theme => ({
  '@global': {
    body: {
      margin: 0,
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    a: {
      color: theme.palette.accent[500],
      '&:hover': {
        color: theme.palette.primary[500],
      }
    }
  },
}));

class AppContainer extends Component {
  componentDidMount() {
    const adjustFooterSize = (extra) => {
      $('#main-content').css('margin-bottom', ($('.footer').height() + extra) + 'px');
    }
    adjustFooterSize(21);
    $(window).scroll(adjustFooterSize);
    $(window).resize(adjustFooterSize);
  }
  render() {
    document.title = document.title === '' ? this.props.config.app.name + ' - ' + this.props.config.unit.name : document.title;
    return (
      <div>
        <CsuHeader unit={this.props.config.unit} appName={this.props.config.app.name}>
          {this.props.header}
        </CsuHeader>
        <main id='main-content' style={this.props.style}>
          {this.props.children}
        </main>
        <CsuFooter/>
      </div>
    );
  }
}

AppContainer.propTypes = {
  config: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppContainer);
