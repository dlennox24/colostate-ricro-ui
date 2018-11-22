const createConfig = config => {
  const api = config ? config.api : {};
  const app = config ? config.app : {};
  const defaultState = config ? config.defaultState : {};
  const unit = config ? config.unit : {};
  return {
    api: {
      auth: '/auth/sso/',
      location: '/api/v2',
      ...api,
    },
    app: {
      name: 'App Template - Defaults',
      basename: '/__dev/cru',
      hasLogin: false,
      hasAutoLogin: false,
      sideNav: [
        { name: 'Apps', icon: 'apps', link: '/' },
        { name: 'Contact Us', icon: 'email', link: 'https://vpr.colostate.edu/ricro/contact-us' },
      ],
      userDefaultProfileImg: '/_static/img/default-profile.png',
      ...app,
    },
    unit: {
      name: 'RICRO',
      siteHref: 'https://vpr.colostate.edu/ricro/',
      contactHref: 'https://vpr.colostate.edu/ricro/contact-us',
      ...unit,
    },
    defaultState: { ...defaultState },
  };
};

export default createConfig;
