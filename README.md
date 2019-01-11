# colostate-ricro-ui

UI extension of [Material UI](https://material-ui.com/) for RICRO based applications

[![NPM](https://img.shields.io/npm/v/colostate-ricro-ui.svg)](https://www.npmjs.com/package/colostate-ricro-ui)
[![Maintainability](https://api.codeclimate.com/v1/badges/fe9eab169ba1cbfe9c09/maintainability)](https://codeclimate.com/github/csu-ricro/colostate-ricro-ui/maintainability)
[![Build Status](https://travis-ci.com/csu-ricro/colostate-ricro-ui.svg?branch=master)](https://travis-ci.com/csu-ricro/colostate-ricro-ui)

## Install

```bash
npm install --save colostate-ricro-ui
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

## Development

```
yarn setup
```
```
yarn start
```

## More Docs

- [Components](/src/component/#readme)
- [Scripts](/src/scripts/#readme)

## License

MIT © [csu-ricro](https://github.com/csu-ricro)
