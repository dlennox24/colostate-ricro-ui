import axios from 'axios';
import _ from 'lodash';
import IconApps from 'mdi-material-ui/Apps';
import IconEmail from 'mdi-material-ui/Email';
import React from 'react';
import LoginLogout from '../../../core/LoginLogout';

const contactHref = 'https://vpr.colostate.edu/ricro/contact-us';
const host =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost'
    : 'https://services.ricro.colostate.edu';
const path = '/api/v3';
const basename = '/__dev/cru/v3';

const defaults = {
  api: {
    host,
    path,
    auth: '/auth/sso/',
    axios: axios.create({
      baseURL: host + path, // axios requires URL to be all caps
    }),
  },
  app: {
    name: 'App Template - Defaults',
    basename,
    hasLogin: true,
    hasAutoLogin: false,
    nav: [[]],
  },
  debug: false,
  defaultState: {},
  unit: {
    name: 'RICRO',
    siteHref: 'https://vpr.colostate.edu/ricro/',
    contactHref,
  },
  usedCreateConfigUtil: true,
};

const createConfig = (config = {}) => {
  /*
   * Merges the defaults{} and incoming config{} objects.
   * Check if the object value in config{} is set and uses that value otherwise
   * defaults to the value in defaults{}.
   */
  _.defaultsDeep(config, defaults);

  /*
   * Generates the 2D array for the navigation list. Stacks the defaults{} above
   * the list items from config{}.
   */
  const nav = [
    { name: 'Apps', icon: <IconApps />, link: '/', linkComponent: 'a' },
    <LoginLogout />,
    { name: 'Contact Us', icon: <IconEmail />, link: config.unit.contactHref },
  ];
  if (!config.app.hasLogin) {
    nav.splice(1, 1); // remove <LoginLogout />
  }
  if (config.app.basename === '/') {
    // Apps removal of nav item as it is at the server root and "Apps" routes to server root
    nav.splice(0, 1);
  }
  config.app.nav = [nav, ...config.app.nav];

  /*
   * fix axios baseUrl since baseUrl doesn't get updated from the config injection
   */
  if (config.api.baseUrl !== defaults.api.baseUrl) {
    config.api.baseUrl = config.api.host + config.api.path;
    config.api.axios = axios.create({ baseURL: host + path });
  }

  return config;
};

export default createConfig;
