import React, {
  Component
} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {
  Toolbar,
  ToolbarTitle
} from 'material-ui/Toolbar';

import CsuSvgLogo from './CsuBranding';

import config from './config.json';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

document.title = document.title === '' ? config.appName + ' - ' + config.unitTitle : document.title;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }
  handleChange = (event, index, value) => this.setState({
    value
  });
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(config.muiTheme)}>
        <div>
          <AppBar
            iconElementLeft={<CsuSvgLogo />} />
          <Toolbar>
            <ToolbarTitle text={config.appName} />
          </Toolbar>
          <div id="main-content">
            <h2 className='text-center'>#main-content</h2>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
