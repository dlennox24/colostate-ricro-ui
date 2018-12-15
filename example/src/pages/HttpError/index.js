import { HttpError } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';

const HttpErrorPage = ({ match }) => (
  <React.Fragment>
    <HttpError code={parseInt(match.params.code, 10)} />
  </React.Fragment>
);

HttpErrorPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default HttpErrorPage;
