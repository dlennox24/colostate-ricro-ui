import _ from 'lodash';
import { connect } from 'react-redux';
import ProfileStructureComponent from './component';

const mapStateToProps = state => {
  return {
    loggedInUserId: _.get({ state }, 'state.user.csuId', -1),
  };
};

const ProfileStructure = connect(
  mapStateToProps,
  null,
)(ProfileStructureComponent);

export default ProfileStructure;
