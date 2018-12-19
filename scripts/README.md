# Scripts

## scripts

With no arguments it automatically executes the following, in order:
1. links and installs all library dependencies
1. links the local library package (`colostate-ricor-ui`) to the example and installs example dependencies

```yarn setup```

*\* runs `yarn install` before executing script as script has yarn dependencies*

```cru-scripts [args]```

*\* project must be linked before this CLI command is available*

### Arguments

If no prefix is specified and it is a valid suffix then only commands associated with those suffixes will run. In addition, all other arguments will be ignored.

#### Valid argument prefixes
- `no-`: doesn't do the task of the suffix

#### Valid argument suffixes
- `clean`: removes `node_modules` folders *\* after running this you must run `yarn setup` or `yarn link` before `cru-scripts` works again*
- `install`: alias for `install-lib` and `install-ex`
- `install-lib`: installs `node_modules` in library
- `install-ex`: installs `node_modules` in example
- `link`: alias for `link-lib` and `link-ex`
- `link-lib`: links library
- `link-ex`: links example
- `start`: starts the development environment. Identical to `yarn start`

#### Other arguments
- `debug`: doesn't execute shell commands
- `install`: executes both `install-lib` and `install-ex`
- `link`: executes both `link-lib` and `link-ex`

#### Examples
- `cru-scripts install link-ex`
- `cru-scripts no-clean`
- `cru-scripts link`
- `cru-scripts debug`

## start

The start script spins up development servers and other watch scripts in parallel. **If one script fails, they are all killed.** This is avoid orphaned processes and to prevent the orphans from preventing the use the next iteration's ports.

```yarn start```

The scripts that are prefixed with `yarn:` is shorthand for `yarn run`. Thus `'yarn:start:example'` is identical to `'yarn run start:example'`. Read more about this in [Concurrently's docs](https://github.com/kimmobrunfeldt/concurrently#usage).

To add another script to run concurrently with the other scripts add an object of the following structure to the `scriptArray` variable.

```js
{
  name: '<scriptName>',
  color: chalk.<someColorFromChalk>,
  script: '<script>',
}
```