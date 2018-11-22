import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChevronLeft,
  faEnvelope,
  faInbox,
  faSignInAlt,
  faTh,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import AppFrame from './component/AppFrame';
import createConfig from './utils/config/createConfig';

library.add(faSignInAlt, faEnvelope, faInbox, faBars, faChevronLeft, faTimes, faTh);

export default AppFrame;
export { createConfig };
