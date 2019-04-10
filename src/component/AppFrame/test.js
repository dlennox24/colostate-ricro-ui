import React from 'react';
import ReactDOM from 'react-dom';
import createConfig from '../../utils/config/createConfig';
import AppFrame from './index';
import LogRocket from './LogRocket';

// AppFrame tests
test('AppFrame renders without props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppFrame />, div);
});

test('AppFrame renders without using createConfig util', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame
      config={{ app: { name: '' }, auth: { host: '', loginPath: '' }, unit: { name: '' } }}
    />,
    div,
  );
});

// LogRocket Tests
test('LogRocket renders without config', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame>
      <LogRocket />
    </AppFrame>,
    div,
  );
});

test('LogRocket renders with LogRocket ID', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame
      config={createConfig({ app: { LogRocket: { id: 'be8vlm/colostate-ricro-ui-demo' } } })}
    >
      <LogRocket />
    </AppFrame>,
    div,
  );
});

test('LogRocket renders with LogRocket ID and User logged in', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame
      config={createConfig({
        app: { LogRocket: { id: 'be8vlm/colostate-ricro-ui-demo' } },
        defaultState: {
          user: {
            csuId: 555888222,
            displayName: 'Test Name',
            email: 'test@example.com',
            eId: 'test',
            firstName: 'Test',
            lastName: 'Name',
            userGroups: [],
          },
        },
      })}
    >
      <LogRocket />
    </AppFrame>,
    div,
  );
});
