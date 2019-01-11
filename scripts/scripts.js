#! /usr/bin/env node

const sh = require('shelljs');
const pk = require('../package.json');
const utils = require('./_utils.js');

let args = process.argv.splice(2);

// For debugging/testing script. This way all scripts don't execute each run.
const debug = args.includes('debug');

/*
 * valid arg prefixes:
 *    no-: doesn't do the task of the suffix
 *
 * valid arg suffixes:
 *    clean: removes node_modules folders
 *    install-lib: installs node_modules in library
 *    install-ex: installs node_modules in example
 *    link-lib: links library
 *    link-ex: links example
 *    peers: installs peers via npm-install-peers
 *
 * other args:
 *    debug: doesn't execute shell commands
 *
 * e.g.:
 *    no-clean
 *    only-peers
 */

const script = new utils.Script({ name: 'scripts' });

sh.exec('clear');
// eslint-disable-next-line no-console
console.log(utils.headerColor(`\n${pk.name}@${pk.version} - ${script.name}`));
script.log(utils.bodyColor('Running scripts...'));
script.log(utils.bodyColor(`args passed:\t[${args.sort().toString()}]`));

// aliases for install and link
if (args.includes('install')) {
  args.push('install-lib', 'install-ex');
}
if (args.includes('link')) {
  args.push('link-lib', 'link-ex');
}

// clean args is present then ignore all other args as this purges all node_modules
// and will cause this script to crash
if (args.includes('clean') || !args.includes('no-clean')) {
  args = ['clean'];
  script.log(utils.warnColor('Warning: clean detected. Running only clean option.'));
}
if (args.length === 0) {
  args = ['no-clean'];
}

/*
 * Creates an array of negative args to run. prepends 'no-' to all other args
 * in `validArgs` array. Mutiple values from `validArgs` can be chained together.
 *
 * Ignores all args not in `validArgs` array even if prefixed with 'no-'.
 *
 * e.g. if args is
 *    ['link-ex', clean']
 * then it converts it to
 *    [no-install', 'no-link']
 */
let validArgs = ['clean', 'install-lib', 'install-ex', 'link-lib', 'link-ex'];
const argsToRun = args.filter(arg => validArgs.indexOf(arg) !== -1);
if (argsToRun.length > 0) {
  validArgs = validArgs.filter(arg => argsToRun.indexOf(arg) === -1);
  args = validArgs.map(arg => `no-${arg}`);
}

if (debug && !args.includes('debug')) {
  args.push('debug');
}

script.log(`args ran:\t[${args.sort().toString()}]\n`);

if (!args.includes('no-clean')) {
  new utils.Script({
    name: 'clean',
    description: 'Cleaning node_modules',
    // order matters for shellScripts here
    // delete example/node_modules then node_modules as this script depends on the latter
    shellScripts: ['rm -rf example/node_modules', 'rm -rf node_modules'],
    debug,
  }).exec();
}

if (!args.includes('no-install')) {
  if (!args.includes('no-install-lib')) {
    new utils.Script({
      name: 'install-lib',
      description: 'Installing library dependencies',
      shellScripts: 'yarn install',
      debug,
    }).exec();
  }
  if (!args.includes('no-install-ex')) {
    new utils.Script({
      name: 'install-ex',
      description: 'Installing example dependencies',
      shellScripts: [{ func: 'cd', args: 'example' }, 'yarn install', { func: 'cd', args: '..' }],
      debug,
    }).exec();
  }
}

if (!args.includes('no-link')) {
  if (!args.includes('no-link-lib')) {
    new utils.Script({
      name: 'link-lib',
      description: 'Linking library',
      shellScripts: 'yarn link',
      debug,
    }).exec();
  }
  if (!args.includes('no-link-ex')) {
    new utils.Script({
      name: 'link-ex',
      description: 'Linking example',
      shellScripts: [
        { func: 'cd', args: 'example' },
        'yarn link colostate-ricro-ui',
        { func: 'cd', args: '..' },
      ],
      debug,
    }).exec();
  }
}
