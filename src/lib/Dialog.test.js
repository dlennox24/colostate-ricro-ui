import React from 'react';
import ReactDOM from 'react-dom';
import CsuDialog from './Dialog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CsuDialog open={false} onClose={()=>{}} />, div);
});