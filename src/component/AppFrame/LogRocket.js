import _ from 'lodash';
import LogRocket from 'logrocket';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const LogRocketConnect = ({ config, user }) => {
  if (process.env.NODE_ENV === 'production' && _.get(config, 'app.logRocketId', false)) {
    LogRocket.init(config.app.logRocketId);
    if (!_.isEmpty(user)) {
      LogRocket.identify(user.csuId, {
        name: user.displayName,
        email: user.email,
        user,
      });
    }
  }
  return null;
};

LogRocketConnect.propTypes = {
  config: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = state => ({ config: state.config, user: state.user });
export default connect(mapStateToProps)(LogRocketConnect);
