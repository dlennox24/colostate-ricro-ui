import React from 'react';
import ReactDOM from 'react-dom';
import config from './_config.json';
import App from '../';

// Basic config render
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App config={config} />, div);
});

// Basic default config rendering
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

const badConfig = {
  api: {
    auth: '/auth/sso/',
    location: '/api/v2',
  },
  app: {
    name: 'App Template - Defaults',
    basename: 'tets',
    hasAutoLogin: true,
    sideNav: [],
    userDefaultProfileImg: '/_static/img/default-profile.png',
  },
  unit: {
    name: 'RICRO',
    siteHref: 'https://vpr.colostate.edu/ricro/',
    contactHref: 'https://vpr.colostate.edu/ricro/contact-us',
  },
  defaultState: {},
};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App config={badConfig} />, div);
});
