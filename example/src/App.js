import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import { Route } from 'react-router-dom';
import config0 from './assets/config0';
import AboutPage from './pages/About';
import CloseableDialogPage from './pages/CloseableDialog';
import CommitteesPage from './pages/Committees';
// import FileDropzonePage from './pages/FileDropzone';
// import HttpErrorPage from './pages/HttpError';
// import IconSnackbarContentPage from './pages/IconSnackbarContent';
import TypographyPage from './pages/Typography';
// import UserProfilePage from './pages/User';
// import ApiTablePage from './pages/ApiTable';

const routes = [
  { path: '/', component: AboutPage },
  { path: '/closeable-dialog', component: CloseableDialogPage },
  { path: '/committees', component: CommitteesPage },
  // { path: '/file-dropzone', component: FileDropzonePage },
  // { path: '/http-error/:code', component: HttpErrorPage },
  // { path: '/icon-snackbar-content', component: IconSnackbarContentPage },
  // { path: '/loading-indicator', component: LoadingIndicator },
  // { path: '/user-profile', component: UserProfilePage },
  { path: '/typography', component: TypographyPage },
  // { path: '/api-table', component: ApiTablePage },
];

const App = () => (
  <AppFrame config={createConfig(config0)}>
    {routes.map(route => (
      <Route component={route.component} exact key={route.path} path={route.path} />
    ))}
  </AppFrame>
);

export default App;
