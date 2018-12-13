import _ from 'lodash';
import IconApps from 'mdi-material-ui/Apps';
import IconEmail from 'mdi-material-ui/Email';
import React from 'react';
import LoginLogout from '../../../core/LoginLogout';

const contactHref = 'https://vpr.colostate.edu/ricro/contact-us';
const defaults = {
  api: {
    auth: '/auth/sso/',
    location: '/api/v2',
  },
  app: {
    name: 'App Template - Defaults',
    basename: '/__dev/cru',
    hasLogin: true,
    hasAutoLogin: false,
    nav: [
      [
        { name: 'Apps', icon: <IconApps />, link: '/' },
        { name: 'Contact Us', icon: <IconEmail />, link: contactHref },
      ],
    ],
  },
  unit: {
    name: 'RICRO',
    siteHref: 'https://vpr.colostate.edu/ricro/',
    contactHref,
  },
  defaultState: {},
  usedCreateConfigUtil: true,
};

const createConfig = config => {
  if (!config) return defaults;

  // Merges the defaults{} and incoming config{} objects
  // Check if the object value in config{} is set and uses that value otherwise
  //  defaults to the value in defaults{}
  const mergedConfig = _.mergeWith(defaults, config, (defaultValue, configValue) => {
    return configValue || defaultValue;
  });

  // Generates the 2D array for the navigation list. Stacks the defaults{} above
  //  the list items from config{}
  const nav = [{ name: 'Contact Us', icon: <IconEmail />, link: mergedConfig.unit.contactHref }];
  if (mergedConfig.app.hasLogin) {
    nav.unshift(<LoginLogout isLoggedIn />);
  }
  if (mergedConfig.app.basename !== '/') {
    nav.unshift({ name: 'Apps', icon: <IconApps />, link: '/', linkComponent: 'a' });
  }

  // _.get() checks if the route is valid in the {config{}} object. Returns undefined
  //  if route is null or undefined
  mergedConfig.app.nav = _.get({ config }, 'config.app.nav') ? [nav, ...config.app.nav] : [nav];
  return mergedConfig;
};

export default createConfig;
