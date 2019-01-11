import { Link } from 'react-router-dom';

const createMuiComponentLink = (navItem, linkPrefix = '') => {
  if (navItem.link == null) {
    return {};
  }

  if (
    navItem.link.match(/^\/([A-Za-z\d/%=?&#-]+)*\/*$/g) &&
    (navItem.linkComponent == null || navItem.linkComponent === Link)
  ) {
    return { to: linkPrefix + navItem.link, component: Link };
  }

  return { href: navItem.link, component: 'a' };
};

export default createMuiComponentLink;
