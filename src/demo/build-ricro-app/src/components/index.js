import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  withRouter,
} from 'react-router';

import {
  LoadMore,
  SectionContainer,
} from 'ricro-app-template';
import components from './components.json';
import Committees from './Committees';
import Dialog from './Dialog';
import HttpError from './HttpError';
import Snackbar from './Snackbar';

class SideNavEx extends Component {
  render() {
    const {
      match,
    } = this.props;
    const component = components[_.findIndex(components, component => match.params.component === component.path)]
    return (
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

SideNavEx.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(SideNavEx);