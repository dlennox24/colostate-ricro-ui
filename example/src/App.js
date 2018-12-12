import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import config from './assets/config';
import CruTypography from './pages/CruTypography';
import UserProfile from './pages/User';
import { Route } from 'react-router-dom';
import HttpError from './pages/HttpError';
import Committees from './pages/Committees';

const App = () => (
  <AppFrame config={createConfig(config)}>
    <Route exact path="/" component={CruTypography} />
    <Route exact path="/committees" component={Committees} />
    <Route exact path="/user-profile" component={UserProfile} />
    <Route exact path="/http-error/:code" component={HttpError} />
  </AppFrame>
);

export default App;
