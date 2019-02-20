import _ from 'lodash';
import { connect } from 'react-redux';
import reduxUpdateProfileImage from './actions';
import ProfileImageComponent from './component';

const mapStateToProps = state => {
  return {
    loggedInUserId: _.get({ state }, 'state.user.csuId', -1),
    api: state.config.api,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleReduxUpdateProfileImage: profileImagePath => {
      dispatch(reduxUpdateProfileImage(profileImagePath));
    },
  };
};

const ProfileImage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileImageComponent);

export default ProfileImage;
