import React, {
  Component
} from 'react';
import $ from 'jquery';

import CsuFooter from './CsuFooter';
import CsuHeader from './CsuHeader';

import './AppContainer.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  componentDidMount() {
    const adjustFooterSize = (extra) => {
      console.log($('.footer').height());
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
        <div id='main-content' style={this.props.style}>
          {this.props.children}
        </div>
        <CsuFooter/>
      </div>
    );
  }
}
export default App;
