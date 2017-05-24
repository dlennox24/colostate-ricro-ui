import React, {
  Component
} from 'react';
import $ from 'jquery';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {
  Toolbar,
  ToolbarTitle,
  ToolbarGroup,
  ToolbarSeparator
} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';

import CsuSvgUnitLogo from './CsuSvgUnitLogo';

import './CsuHeader.css';

export default class CsuHeader extends Component {
  componentWillMount() {
    document.title = document.title === '' ? this.props.appName + ' - ' + this.props.unit.title : document.title;
    $(window).scroll(function() {
      $('#logobar').css('margin-bottom', $('#top-toolbar').height() + 'px');
      if ($(this).scrollTop() >= $('#logobar').height()) {
        $('#top-toolbar').css('margin-top', 0);
        $('#top-toolbar').addClass('sticky');
      } else {
        $('#top-toolbar').css('margin-top', '-' + $('#top-toolbar').height() + 'px');
        $('#top-toolbar').removeClass('sticky');
      }
    });
  }
  render() {
    const defaultHeader = [
      <ToolbarTitle key={0} text={this.props.appName} />,
      (<ToolbarGroup key={1}>
        <IconButton
          href='/'
          tooltip='Home'>
          <FontIcon className='material-icons'>home</FontIcon>
        </IconButton>
        <ToolbarSeparator style={{marginLeft:0}} />
        <IconButton
          href={this.props.unit.contactHref}
          tooltip='Contact Us'
          tooltipPosition='bottom-left'>
          <FontIcon className='material-icons'>email</FontIcon>
        </IconButton>
      </ToolbarGroup>)
    ];

    return (
      <div>
        <AppBar
          style={{marginBottom: '56px'}}
          id='logobar'
          iconElementLeft={<CsuSvgUnitLogo unit={this.props.unit} />} />
        <Toolbar id='top-toolbar' style={{marginTop: '-56px'}}>
          {this.props.children == null ? defaultHeader : this.props.children}
        </Toolbar>
      </div>
    );
  }
}
