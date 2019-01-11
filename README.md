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
import React from 'react'
import AppFrame from 'colostate-ricro-ui'
import config from '<pathToConfig>'

class Example extends Reat.Component {
  render () {
    return (
      <AppFrame config={createConfig(config)}>
        {/* App Roots */}
      </AppFrame>
    )
  }
}
```

## Development

```
yarn setup
```
```
yarn start
```

## License

MIT © [csu-ricro](https://github.com/csu-ricro)
