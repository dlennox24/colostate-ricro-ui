/* global jest */
import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../../demo/config.json';
import App from './';

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
        'top-start',
      ];

      constructor() {
        return {
          destroy: () => {},
          scheduleUpdate: () => {},
        };
      }
    },
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App config={config} />, div);
});

config.defaultState.login = {};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App config={config} />, div);
});
