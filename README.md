# colostate-ricro-ui

[![npm version](https://badge.fury.io/js/colostate-ricro-ui.svg)](https://badge.fury.io/js/colostate-ricro-ui) [![Build Status](https://travis-ci.org/dlennox24/colostate-ricro-ui.svg?branch=master)](https://travis-ci.org/dlennox24/colostate-ricro-ui) [![dependencies Status](https://david-dm.org/dlennox24/colostate-ricro-ui/status.svg)](https://david-dm.org/dlennox24/colostate-ricro-ui) [![devDependencies Status](https://david-dm.org/dlennox24/colostate-ricro-ui/dev-status.svg)](https://david-dm.org/dlennox24/colostate-ricro-ui?type=dev)

## Install

```bash
npm install --save colostate-ricro-ui
```

## Usage

### App

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import App from 'colostate-ricro-ui';
import registerServiceWorker from './registerServiceWorker';
import Components from './components';
import config from './config.json';
import SideNavEx from './SideNavEx';
import TypographyEx from './TypographyEx';
import { version, name as appName } from '../package.json';

console.log(`${appName}@${version}`); // eslint-disable-line no-console

const routes = [
  <Route key={0} path="/" exact component={TypographyEx} />,
  <Route key={1} path="/component/:component" exact component={Components} />,
];

const reduxMiddleware =
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
  <App config={config} SideNav={SideNavEx} routes={routes} reduxMiddleware={reduxMiddleware} />,
  document.getElementById('root'),
);

registerServiceWorker();
```

## Development

### Installation

```bash
npm i && npm link && cd example && npm i && npm link colostate-ricro-ui && cd ..
```

### Dev Servers

Starting the **library** build script for development.

```bash
npm start
```

Starting the **example** build script for development.

```bash
npm run start:example
```

### Linting (ESLint)

Lint both the library and the example.

```bash
npm run lint
```

Lint the library.

```bash
npm run lint:lib
```

Lint the example

```bash
npm run lint:example
```

### Production Build

Builds the library

```bash
npm run build
```

Builds the example

```bash
npm run build:example
```
