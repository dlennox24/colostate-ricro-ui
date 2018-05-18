import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  loadedBranding: {
    height: 0,
    overflow: 'hidden',
  },
  root: {
    padding: theme.spacing.unit / 2,
  },
});

class Header extends React.Component {
  state = {
    loadedBranding: false,
  };

  componentDidMount() {
    const updateState = this.updateState;
    $.getScript('https://static.colostate.edu/logo/reslogo/logo.min.js').done(() => {
      updateState('loadedBranding', true);
    });
  }

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { unit, classes } = this.props;
    const { loadedBranding } = this.state;
    return (
      <AppBar
        id="csuLogoBar"
        position="static"
        className={classNames(classes.root, !loadedBranding && classes.loadedBranding)}
      >
        {!loadedBranding ? (
          <div />
        ) : (
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
        )}
      </AppBar>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  unit: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
