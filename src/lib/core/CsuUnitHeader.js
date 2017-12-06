import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import classNames from 'classnames';
import {
  withStyles,
} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

const styles = theme => ({
  loadedBranding: {
    height: 0,
    overflow: 'hidden',
  },
});

class Header extends Component {
  state = {
    loadedBranding: false,
  }

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  componentDidMount() {
    let updateState = this.updateState;
    $.getScript('https://static.colostate.edu/logo/reslogo/logo.min.js').done(function() {
      updateState('loadedBranding', true);
    });
  }

  render() {
    const {
      unit,
      classes,
    } = this.props;
    const {
      loadedBranding,
    } = this.state;
    return (
      <AppBar
        id='csuLogoBar'
        position='static'
        className={classNames('p-1', !loadedBranding && classes.loadedBranding)}
        >
        <div className='signature'>
          <section id='BrandLogo' className='fontLarge'>
            <div className='responsiveLogoContainer'>
              <div id='responsiveLogo'></div>
              <div id='responsiveLogoSubsytem'>
                <h2><a id='unit-title' href={unit.siteHref}>{unit.name}</a></h2>
              </div>
            </div>
          </section>
        </div>
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
