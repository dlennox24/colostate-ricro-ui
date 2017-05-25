import React, {
  Component
} from 'react';
import $ from 'jquery';

export default class CsuSvgUnitLogo extends Component {
  componentDidMount() {
    $.getScript('https://static.colostate.edu/logo/reslogo/logo.min.js').done(function() {
      $('#unit-title').css('display', 'initial');
    });
  }
  render() {
    return (
      <div style={{marginTop: '-7px'}} className='signature'>
        <section id='BrandLogo' className='fontLarge'>
          <div className='responsiveLogoContainer'>
            <div id='responsiveLogo' className='screenMD'></div>
            <div id='responsiveLogoSubsytem'>
              <h2>
                <a id='unit-title' style={{display: 'none'}} href={this.props.unit.site}>
                  {this.props.unit.name}
                </a>
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
