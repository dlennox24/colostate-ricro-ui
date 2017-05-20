import React, {
   Component
} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {
   Toolbar,
   ToolbarTitle,
   ToolbarGroup,
   ToolbarSeparator
} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';

import CsuSvgLogo, {CsuFooter} from './CsuBranding';

import config from './config.json';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

document.title = document.title === '' ? config.appName + ' - ' + config.unitTitle : document.title;

class App extends Component {
   render() {
      return (
         <div>
            <AppBar
               iconElementLeft={<CsuSvgLogo />} />
            <Toolbar>
               <ToolbarTitle text={config.appName} />
               <ToolbarGroup>
                  <IconButton
                     href='/'
                     tooltip='Home'>
                     <FontIcon className='material-icons'>home</FontIcon>
                  </IconButton>
                  <ToolbarSeparator style={{marginLeft:0}} />
                  <IconButton
                     href={config.unitContact}
                     tooltip='Contact Us'
                     tooltipPosition='bottom-left'>
                     <FontIcon className='material-icons'>email</FontIcon>
                  </IconButton>
               </ToolbarGroup>
            </Toolbar>
            <div id="main-content">
               <h2 className='text-center'>#main-content</h2>
            </div>
            <CsuFooter/>
         </div>
      );
   }
}
export default App;
