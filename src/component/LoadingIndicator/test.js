import React from 'react';
import ReactDOM from 'react-dom';
import LoadingIndicator from './index';

['alignHorizontal', 'alignVertical'].map(prop => {
  return ['center', 'flex-end', 'flex-start', 'unset'].map(variant => {
    prop = { [prop]: variant };
    return test(`${prop}.${variant} renders`, () => {
      const div = document.createElement('div');
      ReactDOM.render(<LoadingIndicator {...prop} />, div);
    });
  });
});

[null, 100, 200, 300].map(size =>
  test(`size=${size} renders`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoadingIndicator size={size} />, div);
  }),
);
