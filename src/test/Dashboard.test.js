import React from 'react';
import ReactDOM from 'react-dom';
import CsuDashboard from '../components/Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CsuDashboard title="Test Title" />, div);
});
