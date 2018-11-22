import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from '../../core/Nav';
import Header from '../../core/Header';
import Footer from '../../core/Footer';
import theme from '../../assets/theme';
import '../../assets/fonts/proxima.css';
import '../../assets/fonts/factoria.css';
import styles from './styles';

const AppFrame = ({ classes, children, config }) => (
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <div id="cru-root" className={classes.root}>
      <CssBaseline />
      <Header unit={config.unit} />
      <Nav app={config.app}>{children}</Nav>
      <Footer />
    </div>
  </MuiThemeProvider>
);

AppFrame.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFrame);
