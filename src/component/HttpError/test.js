import React from 'react';
import ReactDOM from 'react-dom';
import AppFrame from '../AppFrame';
import HttpError from './index';

[401, 403, 404, 500].map(code => {
  test(`${code} renders with required props`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AppFrame>
        <HttpError code={code} />
      </AppFrame>,
      div,
    );
  });
  return 0;
});
