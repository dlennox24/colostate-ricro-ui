# Scripts

## setup

The setup script automatically executes the following, in order:
1. removes both `node_modules` folders in the root and in the example
1. links and installs all library dependencies
1. links the library package to the example and installs example dependencies
1. installs peer dependencies

```npm run setup```

*\* runs `npm i` before executing script as script had dependencies*

```cru-setup [args]```

*\* project must be linked before this CLI command is available*

### Arguments
- `noClean`:
- `noInstall`:
- `noPeers`:

## start

The start script spins up development servers and other watch scripts in parallel. **If one script fails, they are all killed.** This is avoid orphaned processes and to prevent the orphans from preventing the use the next iteration's ports.

```npm start```

The scripts that are prefixed with `npm:` is shorthand for `npm run`. Thus `'npm:start:example'` is identical to `'npm run start:example'`. Read more about this in [Concurrently's docs](https://github.com/kimmobrunfeldt/concurrently#usage).

To add another script to run concurrently with the other scripts add an object of the following structure to the `scriptArray` variable.

```js
{
  name: '<scriptName>',
  color: chalk.<someColorFromChalk>,
  script: '<script>',
}
```