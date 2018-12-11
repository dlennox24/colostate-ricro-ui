import { connect } from 'react-redux';
import HttpErrorComponent from './component';

const mapStateToProps = state => {
  return {
    config: state.config,
  };
};

const HttpError = connect(
  mapStateToProps,
  null,
)(HttpErrorComponent);

export default HttpError;
