import React, {
  Component
} from 'react';
import $ from 'jquery';

import CsuFooter from './CsuFooter';
import CsuHeader from './CsuHeader';

import './AppContainer.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  componentDidMount() {
    $(window).scroll(function() {
      $('#main-content').css('margin-bottom', $('.footer').height() + 'px');
    });
  }
  render() {
    return (
      <div>
        <CsuHeader unit={this.props.config.unit} appName={this.props.config.app.name}/>
        <div id='main-content' style={this.props.style}>
          {this.props.children}
        </div>
        <CsuFooter/>
      </div>
    );
  }
}
export default App;
