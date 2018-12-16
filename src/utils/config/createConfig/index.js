import axios from 'axios';
import _ from 'lodash';
import defaults, { defaultContactHref } from './defaults';

const createConfig = (config = {}) => {
  /*
   * Grabs default nav list but then clears it before merge to avoid merging the
   * frist default nav list and the first config nav list. Avoid use of the spread
   * operator for these. They do not create new instances of the objects and use
   * a reference instead for some unkown reason.
   */
  const nav = _.cloneDeep(defaults.app.nav[0]);
  const moddedDefaults = _.cloneDeep(defaults);
  moddedDefaults.app.nav = [];

  /*
   * Merges the defaults{} and incoming config{} objects.
   * Check if the object value in config{} is set and uses that value otherwise
   * defaults to the value in defaults{}.
   */
  _.defaultsDeep(config, moddedDefaults);

  /*
   * Generates the 2D array for the navigation list. Stacks the defaults{} above
   * the list items from config{}.
   */
  if (config.unit.contactHref !== defaultContactHref) {
    nav[2].link = config.unit.contactHref;
  }
  if (!config.app.hasLogin) {
    nav.splice(1, 1); // remove <LoginLogout />
  }
  if (config.app.basename === '/') {
    // Apps removal of nav item as it is at the server root and "Apps" routes to server root
    nav.splice(0, 1);
  }
  config.app.nav = config.app.nav.length > 0 ? [nav, ...config.app.nav] : [nav];

  /*
   * fix axios baseUrl since baseUrl doesn't get updated from the config injection
   */
  if (config.api.baseUrl !== moddedDefaults.api.baseUrl) {
    config.api.baseUrl = config.api.host + config.api.path;
    config.api.axios = axios.create({ baseURL: config.api.baseUrl });
  }

  return config;
};

export default createConfig;
