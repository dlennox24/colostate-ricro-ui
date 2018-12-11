import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import config from './assets/config';
import IndexPage from './pages/IndexPage';
import UserPage from './pages/UserPage';
import { Route } from 'react-router-dom';

const App = () => (
  <AppFrame config={createConfig(config)}>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/user" component={UserPage} />
  </AppFrame>
);

export default App;
