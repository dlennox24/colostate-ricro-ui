import React from 'react';

import './CsuFooter.css';

const CsuFooter = () => {
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
                <p className='copyright'>&copy; {new Date().getFullYear()} Colorado State University, Fort Collins, Colorado 80523 USA</p>
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

export default CsuFooter;
