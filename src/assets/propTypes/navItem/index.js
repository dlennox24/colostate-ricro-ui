import PropTypes from 'prop-types';

const navItemShape = {
  icon: PropTypes.node,
  link: PropTypes.string,
  linkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  name: PropTypes.string.isRequired,
};

export default PropTypes.shape({
  ...navItemShape,
  subNav: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.shape({
          ...navItemShape,
          subNav: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
        }),
      ]),
    ),
  ),
});
