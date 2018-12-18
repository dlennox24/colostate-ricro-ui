#! /usr/bin/env node
const shell = require('shelljs');
const chalk = require('chalk');

const scriptArray = [
  {
    name: 'library',
    color: chalk.bgBlue.bold,
    script: 'npm:start:library',
  },
  {
    name: 'example',
    color: chalk.black.bgCyan.bold,
    script: 'npm:start:example',
  },
];

const names = scriptArray.map(o => o.color(`[${o.name}]`)).join(',');
const scripts = scriptArray.map(o => `"${o.script}"`).join(' ');

// eslint-disable-next-line no-console
console.log(chalk.green.bold('Starting dev servers...\n'));
shell.exec(`concurrently --kill-others -p "{name}" -n ${names} ${scripts}`);
