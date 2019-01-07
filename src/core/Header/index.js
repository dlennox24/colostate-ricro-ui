import AppBar from '@material-ui/core/AppBar';
import Fade from '@material-ui/core/Fade';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import $ from 'jquery';
import PropTypes from 'prop-types';
import React from 'react';

class Header extends React.Component {
  state = {
    isLoaded: false,
    isOpen: false,
  };

  componentDidMount() {
    $.getScript('https://static.colostate.edu/logo/reslogo/logo.min.js').done(() => {
      this.setState({ isLoaded: true });
      setTimeout(() => this.setState({ isOpen: true }), 300);
    });
  }

  render() {
    const { unit } = this.props;
    const { isLoaded, isOpen } = this.state;
    return (
      <AppBar id="csuLogoBar" position="static" color="primary">
        <Toolbar>
          {!isLoaded ? (
            <Typography variant="h5" color="inherit">
              {unit.name}
            </Typography>
          ) : (
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
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  unit: PropTypes.object.isRequired,
};

export default Header;
