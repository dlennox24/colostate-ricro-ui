import { Link } from 'react-router-dom';

const createMuiComponentLink = (navItem, linkPrefix) => {
  let componentProps = {};
  if (navItem.link != null) {
    if (
      navItem.link.match(/^\/([A-Za-z\d/%=?&#-]+)*\/*$/g) &&
      (navItem.linkComponent == null || navItem.linkComponent === Link)
    ) {
      componentProps = { to: linkPrefix + navItem.link, component: Link };
    } else {
      componentProps = { href: navItem.link, component: 'a' };
    }
  }
  return componentProps;
};

export default createMuiComponentLink;
