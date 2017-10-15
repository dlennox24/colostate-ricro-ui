import React from 'react';
import ReactDOM from 'react-dom';
import config from '../demo/config.json';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App config={config} />, div);
});
