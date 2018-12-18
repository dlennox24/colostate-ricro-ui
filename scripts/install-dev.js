#! /usr/bin/env node
const shell = require('shelljs');
const chalk = require('chalk');

// valid args: noClean, noPeers, onlyPeers

const color = chalk.green.bold;

const args = process.argv.splice(2);

const clean = 'rm -rf node_modules && rm -rf example/node_modules';
const install = 'npm i && npm link && cd example && npm i && npm link colostate-ricro-ui && cd ..';
const peers = 'npm run npm-install-peers';

// eslint-disable-next-line no-console
console.log(color('\nInstalling for development...'));

if (!args.includes('noClean') && !args.includes('onlyPeers')) {
  // eslint-disable-next-line no-console
  console.log(color('\tCleaning node_modules\n'));
  shell.exec(clean);
}

if (!args.includes('onlyPeers')) {
  // eslint-disable-next-line no-console
  console.log(color('\tRunning install and linkage\n'));
  shell.exec(install);
}

if (!args.includes('noPeers')) {
  // eslint-disable-next-line no-console
  console.log(color('\tInstalling peer dependencies\n'));
  shell.exec(peers);
}
