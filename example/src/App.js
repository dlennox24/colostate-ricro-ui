import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import { Route } from 'react-router-dom';
import config0 from './assets/config0';
import Committees from './pages/Committees';
import CruTypography from './pages/CruTypography';
import HttpError from './pages/HttpError';
import IconSnackbarContent from './pages/IconSnackbarContent';
import UserProfile from './pages/User';

const App = () => (
  <AppFrame config={createConfig(config0)}>
    <Route exact path="/" component={CruTypography} />
    <Route exact path="/committees" component={Committees} />
    <Route exact path="/http-error/:code" component={HttpError} />
    <Route exact path="/icon-snackbar-content" component={IconSnackbarContent} />
    <Route exact path="/user-profile" component={UserProfile} />
  </AppFrame>
);

export default App;
