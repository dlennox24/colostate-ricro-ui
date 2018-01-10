import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  withRouter,
} from 'react-router';

import LoadMore from '../../lib/components/LoadMore';
import SectionContainer from '../../lib/components/SectionContainer';

import components from './components.json';
import Committees from './Committees';
import Dialog from './Dialog';
import HttpError from './HttpError';
import Snackbar from './Snackbar';

class Commponents extends Component {
  render() {
    const {
      match,
    } = this.props;
    const component = components[_.findIndex(components, component => match.params.component === component.path)];

    return !component ? null : (
      <SectionContainer type='display2' title={component.label}>
        {component.label === 'Committees' && <Committees/>}
        {component.label === 'Dialog' && <Dialog/>}
        {component.label === 'HTTP Error' && <HttpError/>}
        {component.label === 'Load More' && <LoadMore/>}
        {component.label === 'Snackbar' && <Snackbar/>}
      </SectionContainer>
    );
  }
}

Commponents.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Commponents);