import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withRouter } from 'react-router';
import {LoadMore,SectionContainer} from 'colostate-ricro-ui';
import components from './components.json';
import Committees from './Committees';
import Dialog from './Dialog';
import HttpError from './HttpError';
import Snackbar from './Snackbar';

const Commponents = props => {
  const { match } = props;
  const component =
    components[_.findIndex(components, comp => match.params.component === comp.path)];

  return !component ? null : (
    <SectionContainer type="display2" title={component.label}>
      {component.label === 'Committees' && <Committees />}
      {component.label === 'Dialog' && <Dialog />}
      {component.label === 'HTTP Error' && <HttpError />}
      {component.label === 'Load More' && <LoadMore />}
      {component.label === 'Snackbar' && <Snackbar />}
    </SectionContainer>
  );
};

Commponents.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Commponents);
