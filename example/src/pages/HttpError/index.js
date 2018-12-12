import { HttpError } from 'colostate-ricro-ui';
import React from 'react';

const IndexPage = ({ match }) => (
  <React.Fragment>
    <HttpError code={parseInt(match.params.code, 10)} />
  </React.Fragment>
);

export default IndexPage;
