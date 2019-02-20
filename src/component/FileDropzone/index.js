import { connect } from 'react-redux';
import FileDropzoneComponent from './component';

const mapStateToProps = state => {
  return {
    api: state.config.api,
  };
};

const FileDropzone = connect(
  mapStateToProps,
  null,
)(FileDropzoneComponent);

export default FileDropzone;
