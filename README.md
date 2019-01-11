# colostate-ricro-ui

UI extension of [Material UI](https://material-ui.com/) for RICRO based applications

[![NPM](https://img.shields.io/npm/v/colostate-ricro-ui.svg)](https://www.npmjs.com/package/colostate-ricro-ui)
[![Maintainability](https://api.codeclimate.com/v1/badges/fe9eab169ba1cbfe9c09/maintainability)](https://codeclimate.com/github/csu-ricro/colostate-ricro-ui/maintainability)
[![Build Status](https://travis-ci.com/csu-ricro/colostate-ricro-ui.svg?branch=master)](https://travis-ci.com/csu-ricro/colostate-ricro-ui)

## Install

```bash
npm install colostate-ricro-ui
```

## Basic Usage

```jsx
import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import { Route } from 'react-router-dom';
import config from './assets/config';
import AboutPage from './pages/About';
import CommitteesPage from './pages/Committees';
import TypographyPage from './pages/Typography';

const App = () => (
  <AppFrame config={createConfig(config)}>
    <Route exact path="/" component={AboutPage} />
    <Route exact path="/typography" component={TypographyPage} />
    <Route exact path="/committees" component={CommitteesPage} />
  </AppFrame>
);

export default App;

```
## More Docs

Be sure to add the font imports to the `index.html` or the head of the HTML document.

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="//static.colostate.edu/fonts/factoria/factoria.css" media="none" onload="this.media='all';">
  <link rel="stylesheet" href="//static.colostate.edu/fonts/proxima-nova/proxima.css" media="none" onload="this.media='all';">
```

Ensure the `manifest.json` is up to date. [More info about the manifest](https://developers.google.com/web/fundamentals/web-app-manifest/). Be sure to set the `theme-color` meta tag in the HTML head.

```html
  <meta name="theme-color" content="#1E4D2B">
```

- [Components](/src/component/#readme)
- [Scripts](/src/scripts/#readme)

## Development

```
yarn setup
```
```
yarn start
```


## License

MIT © [csu-ricro](https://github.com/csu-ricro)
