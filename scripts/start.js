#! /usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');
const pk = require('../package.json');
const utils = require('./_utils.js');

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

const script = new utils.Script({
  name: 'start',
  description: 'Starting dev servers...\n',
  shellScripts: executeScript,
});
shell.exec('clear');
// eslint-disable-next-line no-console
console.log(utils.headerColor(`${pk.name}@${pk.version} - ${script.name}`));
script.exec();
