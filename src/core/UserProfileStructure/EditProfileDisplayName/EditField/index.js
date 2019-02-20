import { connect } from 'react-redux';
import reduxUpdateDisplayName from './actions';
import EditFieldComponent from './component';

const mapStateToProps = state => {
  return {
    api: state.config.api,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleReduxUpdateDisplayName: displayName => {
      dispatch(reduxUpdateDisplayName(displayName));
    },
  };
};

const EditField = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditFieldComponent);

export default EditField;
