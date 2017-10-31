import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import App from './App';

import defaults from './assets/defaults.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App config={defaults}><Login api={defaults.api}/></App>, div);
});
