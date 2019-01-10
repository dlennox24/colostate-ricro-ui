import PropTypes from 'prop-types';

const navItemShape = {
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  link: PropTypes.string,
  linkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
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
