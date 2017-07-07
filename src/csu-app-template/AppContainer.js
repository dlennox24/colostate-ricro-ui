import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Paper from 'material-ui/Paper';

import CsuFooter from './CsuFooter';
import CsuHeader from './CsuHeader';

import './AppContainer.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
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
        <Paper id='main-content' square style={this.props.style}>
          {this.props.children}
        </Paper>
        <CsuFooter/>
      </div>
    );
  }
}

App.propTypes = {
  config: PropTypes.object.isRequired,
};

export default App;
