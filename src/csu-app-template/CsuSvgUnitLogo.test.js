import React from 'react';
import ReactDOM from 'react-dom';
import CsuSvgUnitLogo from './CsuSvgUnitLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CsuSvgUnitLogo />, div);
});
