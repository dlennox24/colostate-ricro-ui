import React from 'react';
import PropTypes from 'prop-types';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ContentWrapper from '../../core/ContentWrapper';
import Header from '../../core/Header';
import Footer from '../../core/Footer';
import theme from '../../assets/theme';
import '../../assets/fonts/proxima.css';
import '../../assets/fonts/factoria.css';
import styles from './styles';

const AppFrame = ({ classes, children, config, reducers, reduxMiddleware }) => {
  if (!config.usedCreateConfigUtil) {
    // eslint-disable-next-line
    console.warn(
      'AppFrame: Config file validator not used. Reccomend use of createConfig() for config prop',
    );
  }

  document.title =
    document.title === '' ? `${config.app.name} - ${config.unit.name}` : document.title;

  const combinedReducers = combineReducers({
    // login,
    ...reducers,
  });

  return (
    <Provider store={createStore(combinedReducers, config.defaultState, reduxMiddleware)}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <div id="cru-root" className={classes.root}>
          <CssBaseline />
          <Header unit={config.unit} />
          <ContentWrapper app={config.app}>{children}</ContentWrapper>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Provider>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  reducers: PropTypes.object,
  reduxMiddleware: PropTypes.func,
};

export default withStyles(styles)(AppFrame);
