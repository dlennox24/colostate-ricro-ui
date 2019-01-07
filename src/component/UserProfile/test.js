import React from 'react';
import ReactDOM from 'react-dom';
import testUser from '../../test-data/user';
import AppFrame from '../AppFrame';
import UserProfile from './index';

test('renders with required props', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame>
      <UserProfile user={testUser} />
    </AppFrame>,
    div,
  );
});
