import React, {
  Component
} from 'react';
import $ from 'jquery';

import config from './config.json';
import './CsuBranding.css';

export default class CsuSvgLogo extends Component {
  componentDidMount() {
    $.getScript('https://static.colostate.edu/logo/reslogo/logo.min.js').done(function() {
      $('#unit-title').removeClass('display-none');
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
                <a id='unit-title' className='display-none' href={config.unitUrl}>
                  {config.unitTitle}
                </a>
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export const CsuFooter = () => {
  return (
    <div className='footer'>
      <footer>
        <div className='bottom-footer'>
          <div className='container'>
            <div className='row'>
              <div
                className='col col-lg-8 col-md-6'
                style={{
                  display: 'table',
                  margin: '0 auto'
                }}>
                <ul>
                  <li><a href='https://www.colostate.edu/contact/'>Contact CSU</a></li>
                  <li><a href='https://www.colostate.edu/equal-opportunity'>Equal Opportunity</a></li>
                  <li><a href='https://www.colostate.edu/privacy'>Privacy Statement</a></li>
                  <li><a href='https://www.colostate.edu/disclaimer'>Disclaimer</a></li>
                </ul>
                <p className='copyright'>&copy; 2017 Colorado State University, Fort Collins, Colorado 80523 USA</p>
              </div>
              <div className='col col-lg-4 col-md-6'>
                <div className='bottomlogo'>
                  <a href='http://www.colostate.edu/'>
                    <img src='https://www.colostate.edu/wp-content/themes/csuhome-theme/assets/img/csu-logo-oneline.svg' alt=''/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
