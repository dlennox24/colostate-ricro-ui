import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import App from './App';

import defaults from './assets/defaults.json';

jest.mock(
  'popper.js',
  () =>
  class Popper {
    static placements = [
      'auto',
      'auto-end',
      'auto-start',
      'bottom',
      'bottom-end',
      'bottom-start',
      'left',
      'left-end',
      'left-start',
      'right',
      'right-end',
      'right-start',
      'top',
      'top-end',
      'top-start'
    ];

    constructor() {
      return {
        destroy: () => {},
        scheduleUpdate: () => {}
      };
    }
  }
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App config={defaults}><Login api={defaults.api}/></App>, div);
});