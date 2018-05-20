import React from 'react';
import ReactDOM from 'react-dom';
import CsuUnitHeader from '../core/CsuUnitHeader';
import config from './_config.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CsuUnitHeader unit={config.unit} />, div);
});
