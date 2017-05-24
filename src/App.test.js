import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import config from './config.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer config={config} />, div);
});
