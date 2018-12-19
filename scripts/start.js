#! /usr/bin/env node
/* eslint-disable no-console */

const shell = require('shelljs');
const chalk = require('chalk');
const pk = require('../package.json');
const utils = require('./_utils.js');

const script = new utils.Script({ name: 'start' });

const scriptArray = [
  {
    name: 'library',
    color: chalk.bgBlue.bold,
    script: 'yarn:start:lib',
  },
  {
    name: 'example',
    color: chalk.black.bgCyan.bold,
    script: 'yarn:start:ex',
  },
];

const names = scriptArray.map(o => o.color(`[${o.name}]`)).join(',');
const scripts = scriptArray.map(o => `"${o.script}"`).join(' ');
const executeScript = `concurrently -k -p "{name}" -n ${names} ${scripts}`;

shell.exec('clear');
console.log(utils.headerColor(`${pk.name}@${pk.version} - ${script.name}`));
script.log(utils.bodyColor('Starting dev servers...\n'));
script.log(utils.bodyColor('Starting dev servers...\n'));
shell.exec(executeScript);
