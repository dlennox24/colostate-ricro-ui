import _ from 'lodash';
import { connect } from 'react-redux';
import ProfileStructureComponent from './component';

const mapStateToProps = state => {
  return {
    currentUserId: _.get({ state }, 'state.user.csuId') ? state.user.csuId : null,
  };
};

const ProfileStructure = connect(
  mapStateToProps,
  null,
)(ProfileStructureComponent);

export default ProfileStructure;
