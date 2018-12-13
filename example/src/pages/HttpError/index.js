import { HttpError } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';

const IndexPage = ({ match }) => (
  <React.Fragment>
    <HttpError code={parseInt(match.params.code, 10)} />
  </React.Fragment>
);

IndexPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default IndexPage;
