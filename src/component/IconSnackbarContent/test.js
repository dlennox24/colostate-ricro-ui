import React from 'react';
import ReactDOM from 'react-dom';
import IconSnackBarContent from './index';

['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'].map(variant => {
  test(`${variant} renders with required props`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<IconSnackBarContent variant={variant} />, div);
  });
  return 0;
});
