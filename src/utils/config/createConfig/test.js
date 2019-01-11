import axios from 'axios';
import IconApps from 'mdi-material-ui/Apps';
import IconEmail from 'mdi-material-ui/Email';
import React from 'react';
import LoginLogout from '../../../core/LoginLogout';
import defaults, { defaultContactHref, defaultHost, defaultPath } from './defaults';
import createConfig from './index';

test('null config should return defaults', () => {
  expect(JSON.stringify(createConfig())).toBe(JSON.stringify(defaults));
});

test('config with all values customized should return customized values', () => {
  const test1Source = {
    api: {
      host: 'someHost',
      path: 'somePath',
      auth: '/auth/sso/',
      axios: axios.create({
        baseURL: 'someHostsomePath', // axios requires URL to be all caps
      }),
    },
    app: {
      name: 'test1Source',
      basename: '/some/basename',
      hasLogin: true,
      hasAutoLogin: true,
      nav: [[{ name: 'Apps', icon: <IconApps />, link: '/', linkComponent: 'a' }]],
    },
    debug: false,
    defaultState: {
      someState: {},
    },
    unit: {
      name: 'Unit Name',
      siteHref: 'unit.example.com',
      contactHref: 'unit.example.com/contact-us',
    },
  };

  expect(JSON.stringify(createConfig(test1Source))).toBe(
    JSON.stringify({
      ...test1Source,
      usedCreateConfigUtil: true,
    }),
  );
});

test("nav list doesn't contain login option when app.hasLogin is false", () => {
  expect(JSON.stringify(createConfig({ app: { hasLogin: false } }).app.nav)).toBe(
    JSON.stringify([
      [
        { name: 'Apps', icon: <IconApps />, link: '/', linkComponent: 'a' },
        { name: 'Contact Us', icon: <IconEmail />, link: defaultContactHref },
      ],
    ]),
  );
});

test("nav list doesn't contain link to root apps while on root of all apps", () => {
  expect(
    JSON.stringify(
      createConfig({
        app: { basename: '/' },
      }).app.nav,
    ),
  ).toBe(
    JSON.stringify([
      [<LoginLogout />, { name: 'Contact Us', icon: <IconEmail />, link: defaultContactHref }],
    ]),
  );
});

test('unit.contactHerf is updated in nav list link for contact us', () => {
  const contactHref = 'unit.example.com/contact';
  expect(
    createConfig({
      unit: { contactHref },
    }).app.nav[0][2].link,
  ).toBe(contactHref);
});

test('axios baseUrl should be updated when api.host is not default', () => {
  expect(
    createConfig({
      api: { host: 'test' },
    }).api.axios.defaults.baseURL,
  ).toBe(`test${defaultPath}`);
});

test('axios baseUrl should be updated when api.path is not default', () => {
  expect(
    createConfig({
      api: { path: '/test' },
    }).api.axios.defaults.baseURL,
  ).toBe(`${defaultHost}/test`);
});

test('empty sub arrays are filtered out of the nav array', () => {
  expect(JSON.stringify(createConfig({ app: { nav: [[]] } }).app.nav)).toBe(
    JSON.stringify(defaults.app.nav),
  );
});

test('nav list items should not be added if app.nav is false', () => {
  expect(createConfig({ app: { nav: false } }).app.nav).toBe(false);
});
