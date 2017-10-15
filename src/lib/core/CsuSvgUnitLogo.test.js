import React from 'react';
import ReactDOM from 'react-dom';
import CsuSvgUnitLogo from './CsuSvgUnitLogo';
import config from '../../demo/config.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CsuSvgUnitLogo unit={config.unit} />, div);
});
