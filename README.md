# colostate-ricro-ui

UI extension of [Material UI](https://material-ui.com/) for RICRO based applications

[![NPM](https://img.shields.io/npm/v/colostate-ricro-ui.svg)](https://www.npmjs.com/package/colostate-ricro-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save colostate-ricro-ui
```

## Usage

```jsx
import React from 'react'
import AppFrame from 'colostate-ricro-ui'
import config from '<pathToConfig>'

class Example extends Reat.Component {
  render () {
    return (
      <AppFrame config={createConfig(config)}>
        App Routes
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
yar start
```

## License

MIT © [csu-ricro](https://github.com/csu-ricro)
