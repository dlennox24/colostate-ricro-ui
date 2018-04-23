import React from 'react';
import ReactDOM from 'react-dom';
import UAS from './UserAccountSettings';

const testUser = {
  eId: 'dlennox',
  csuId: 830126214,
  hrId: 254611,
  ariesId: 11397072,
  displayName: 'Daniel Lennox',
  firstName: 'Daniel',
  lastName: 'Lennox',
  nickname: 'Daniel',
  email: 'daniel.lennox@colostate.edu',
  loginTime: '2017-10-15T23:55:53.105Z',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UAS user={testUser}/>, div);
});
