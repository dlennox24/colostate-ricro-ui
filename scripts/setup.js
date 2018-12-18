#! /usr/bin/env node
/* eslint-disable no-console */
const shell = require('shelljs');
const chalk = require('chalk');
const pk = require('../package.json');

/*
 * valid args:
 *    noClean: doesn't remove node_modules folders
 *    noPeers: doesn't install peers via npm-install-peers
 *    noInstall: doesn't install node_modules in library or example
 */

const headerColor = chalk.blue.bold;
const bodyColor = chalk.green.bold;

console.log(headerColor(`${pk.name}@${pk.version} - setup`));

const args = process.argv.splice(2);

const clean = 'rm -rf node_modules && rm -rf example/node_modules';
const installLib = 'sudo npm link'; // npm i is ran in package.json scripts.setup
const installExample = 'cd example && npm i && sudo npm link colostate-ricro-ui && cd ..';
const peers = 'npm run npm-install-peers';

console.log(bodyColor('\nRunning setup...'));

if (!args.includes('noClean')) {
  console.log(bodyColor('\tCleaning node_modules\n'));
  shell.exec(clean);
}

if (!args.includes('noInstall')) {
  console.log(bodyColor('\tRunning install and linkage\n'));
  shell.exec(`${installLib} && ${installExample}`);
}

if (!args.includes('noPeers')) {
  console.log(bodyColor('\tInstalling peer dependencies\n'));
  shell.exec(peers);
}
