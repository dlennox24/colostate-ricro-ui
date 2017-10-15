import React from 'react';
import ReactDOM from 'react-dom';
import CsuDialog from './CsuDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CsuDialog open={false} onRequestClose={()=>{}} />, div);
});
