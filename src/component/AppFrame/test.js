import React from 'react';
import ReactDOM from 'react-dom';
import AppFrame from './index';

test('renders without props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppFrame />, div);
});
