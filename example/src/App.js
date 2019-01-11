import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import { Route } from 'react-router-dom';
import config0 from './assets/config0';
import AboutPage from './pages/About';
import CloseableDialogPage from './pages/CloseableDialog';
import CommitteesPage from './pages/Committees';
import HttpErrorPage from './pages/HttpError';
import IconSnackbarContentPage from './pages/IconSnackbarContent';
import TypographyPage from './pages/Typography';
import UserProfilePage from './pages/User';

const App = () => (
  <AppFrame config={createConfig(config0)}>
    <Route exact path="/" component={AboutPage} />
    <Route exact path="/typography" component={TypographyPage} />
    <Route exact path="/committees" component={CommitteesPage} />
    <Route exact path="/closeable-dialog" component={CloseableDialogPage} />
    <Route exact path="/http-error/:code" component={HttpErrorPage} />
    <Route exact path="/icon-snackbar-content" component={IconSnackbarContentPage} />
    <Route exact path="/user-profile" component={UserProfilePage} />
  </AppFrame>
);

export default App;
