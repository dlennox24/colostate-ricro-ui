import IconAppleSafari from 'mdi-material-ui/AppleSafari';
import IconEdge from 'mdi-material-ui/Edge';
import IconFirefox from 'mdi-material-ui/Firefox';
import IconGoogleChrome from 'mdi-material-ui/GoogleChrome';
import React from 'react';

export default [
  {
    name: 'Google Chrome',
    shortName: 'Chrome',
    icon: <IconGoogleChrome />,
    url: 'https://www.google.com/chrome/',
  },
  {
    name: 'Microsoft Edge',
    shortName: 'Edge',
    icon: <IconEdge />,
    url: 'https://www.microsoft.com/en-us/windows/microsoft-edge',
  },
  {
    name: 'Mozilla FireFox',
    shortName: 'FireFox',
    icon: <IconFirefox />,
    url: 'https://www.mozilla.org/en-US/firefox/new/',
  },
  {
    name: 'Apple Safari',
    shortName: 'Safari',
    icon: <IconAppleSafari />,
    url: 'https://www.apple.com/safari/',
  },
];
