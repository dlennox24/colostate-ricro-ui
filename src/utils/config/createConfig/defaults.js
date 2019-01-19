import axios from 'axios';
import IconApps from 'mdi-material-ui/Apps';
import IconEmail from 'mdi-material-ui/Email';
import React from 'react';
import LoginLogout from '../../../core/LoginLogout';

const defaultContactHref = 'https://vpr.colostate.edu/ricro/contact-us';
const defaultHost =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost'
    : 'https://services.ricro.colostate.edu';
const defaultPath = '/api/v3';
const defaultBasename = '/__dev/cru/v3';

const defaults = {
  api: {
    host: defaultHost,
    path: defaultPath,
    baseUrl: defaultHost + defaultPath,
    axios: axios.create({
      baseURL: defaultHost + defaultPath, // axios requires URL to be all caps
    }),
  },
  auth: {
    host: defaultHost,
    shibPath: '/auth/sso/?v=3',
    loginPath: '/auth/v3/login/',
    logoutPath: '/auth/v3/logout/',
  },
  app: {
    name: 'App Template - Defaults',
    basename: defaultBasename,
    hasLogin: true,
    hasAutoLogin: false,
    nav: [
      [
        { name: 'Apps', icon: <IconApps />, link: '/', linkComponent: 'a' },
        <LoginLogout />,
        { name: 'Contact Us', icon: <IconEmail />, link: defaultContactHref },
      ],
    ],
  },
  debug: false,
  defaultState: {},
  unit: {
    name: 'RICRO',
    siteHref: 'https://vpr.colostate.edu/ricro/',
    contactHref: defaultContactHref,
  },
  usedCreateConfigUtil: true,
};

export default defaults;
export { defaultBasename, defaultContactHref, defaultHost, defaultPath };
