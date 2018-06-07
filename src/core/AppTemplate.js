import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Footer from './Footer';
import CsuUnitHeader from './CsuUnitHeader';
import IeWarning from './IeWarning';
import AppWrapper from './appWrapper/AppWrapper';

const styles = theme => ({
  '@global': {
    body: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      fontFamily: "'prox-regular', 'Helvetica', 'Arial', sans-serif",
    },
    a: {
      textDecoration: 'none',
    },
    'span>a, p>a, .linkStyleOverride': {
      textDecoration: `underline solid ${theme.palette.csuBrand.tertiary.darkSlate}`,
      color: theme.palette.csuBrand.tertiary.darkSlate,
    },
    'a img': {
      border: 'none',
      '&:hover': {
        border: 'none',
      },
    },
    code: {
      padding: '0.2em 0.4em',
      margin: 0,
      borderRadius: 3,
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.grey[800],
    },
    pre: {
      padding: '8px 10px 16px',
      backgroundColor: theme.palette.grey[200],
      borderLeft: `4px solid ${theme.palette.csuBrand.primary.green}`,
      color: theme.palette.grey[800],
      lineHeight: '1.2rem',
      overflow: 'auto',
    },
    hr: {
      background: theme.palette.csuBrand.primary.green,
      height: 2,
      margin: `0 0 ${theme.spacing.unit}px`,
      border: 0,
    },
  },
  mainContent: {
    overflow: 'auto',
    height: '100%',
  },
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  flex: {
    flex: 1,
  },
});

const AppTemplate = props => {
  const { classes, config, children, SideNav } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <CsuUnitHeader unit={config.unit} />
        <AppWrapper config={config} SideNav={SideNav}>
          <div>
            <IeWarning />
            {children}
          </div>
          <div className={classes.flex} />
          <Footer />
        </AppWrapper>
      </div>
    </React.Fragment>
  );
};

AppTemplate.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  reduxMiddleware: PropTypes.func,
  SideNav: PropTypes.func,
};

export default withStyles(styles)(AppTemplate);
