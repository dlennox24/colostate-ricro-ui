import AppBar from '@material-ui/core/AppBar';
import Fade from '@material-ui/core/Fade';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';

class Header extends React.Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    const logoScript = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      document.body.appendChild(script);
      script.onload = resolve;
      script.onerror = reject;
      script.async = true;
      script.src = 'https://static.colostate.edu/logo/reslogo/logo.min.js';
    });

    logoScript.then(() => {
      const checkOpen = setInterval(() => {
        if (document.getElementById('BrandLogo') !== null) {
          if (document.getElementById('BrandLogo').children[0].nodeName.toLowerCase() === 'style') {
            clearInterval(checkOpen);
            return this.setState({ isOpen: true });
          }
        }
        return null;
      }, 10);
    });
  }

  render() {
    const { unit } = this.props;
    const { isOpen } = this.state;
    return (
      <AppBar id="csuLogoBar" position="static" color="primary">
        <Toolbar>
          <Fade in={isOpen}>
            <div className="signature">
              <section id="BrandLogo" className="fontLarge">
                <div className="responsiveLogoContainer">
                  <div id="responsiveLogo" />
                  <div id="responsiveLogoSubsytem">
                    <h2>
                      <a id="unit-title" href={unit.siteHref}>
                        {unit.name}
                      </a>
                    </h2>
                  </div>
                </div>
              </section>
            </div>
          </Fade>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  unit: PropTypes.object.isRequired,
};

export default Header;
