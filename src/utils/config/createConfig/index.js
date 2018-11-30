import { faLifeRing, faTh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@material-ui/core/Icon';
import MdiIcon from '@mdi/react';
import { mdiEmail, mdiApps } from '@mdi/js';
import React from 'react';
import _ from 'lodash';
import Login from '../../../core/Login';

const appsIcon = (
  <Icon>
    <MdiIcon path={mdiApps} size={1} />
  </Icon>
);
const contactIcon = (
  <Icon>
    <MdiIcon path={mdiEmail} size={1} />
  </Icon>
);
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
        { name: 'Apps', icon: appsIcon, link: '/' },
        <Login />,
        {
          name: 'Contact Us',
          icon: contactIcon,
          link: contactHref,
        },
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
  const mergedConfig = _.mergeWith(defaults, config, (dValue, cValue) => {
    return cValue || dValue;
  });

  // Generates the 2D array for the navigation list. Stacks the defaults{} above
  //  the list items from config{}
  const nav = [
    {
      name: 'Contact Us',
      icon: contactIcon,
      link: mergedConfig.unit.contactHref,
    },
  ];
  if (mergedConfig.app.hasLogin) {
    nav.unshift(<Login isLoggedIn />);
  }
  if (mergedConfig.app.basename !== '/') {
    nav.unshift({ name: 'Apps', icon: appsIcon, link: '/' });
  }
  // _.get() checks if the route is valid in the {config{}} object. Returns undefined
  //  if route is null or undefined
  mergedConfig.app.nav = _.get({ config }, 'config.app.nav') ? [nav, ...config.app.nav] : [nav];

  return mergedConfig;
};

export default createConfig;
