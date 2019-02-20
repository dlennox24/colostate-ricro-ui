import PropTypes from 'prop-types';

export default PropTypes.shape({
  csuId: PropTypes.number.isRequired,
  displayName: PropTypes.string.isRequired,
  eId: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  profileImg: PropTypes.string,
  userGroups: PropTypes.arrayOf(
    PropTypes.shape({
      alias: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
});
