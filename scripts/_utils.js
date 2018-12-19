const sh = require('shelljs');
const chalk = require('chalk');

const versionColor = chalk.blue.bold;
const headerColor = chalk.white.bgBlue.bold;
const bodyColor = chalk.blue.bold;
const debugColor = chalk.cyan;
const errorColor = chalk.black.Red;
const successColor = chalk.black.bgGreen;
const warnColor = chalk.black.bgYellow;

class Script {
  constructor({ name, description, shellScripts, debug }) {
    this.name = name;
    this.description = description;
    this.shellScripts = Array.isArray(shellScripts) ? shellScripts : [shellScripts];
    this.debug = debug;
  }

  log(logString) {
    // eslint-disable-next-line no-console
    console.log(`${headerColor(`[${this.name}]`)}\t${bodyColor(logString)}`);
  }

  exec() {
    this.log(this.description);
    this.shellScripts.map(script => {
      if (typeof script === 'object') {
        const { func, args } = script;
        this.log(debugColor(`    ${func} ${args}`));
        if (!this.debug) sh[func](args);
      } else {
        this.log(debugColor(`    ${script}`));
        if (!this.debug) sh.exec(script);
      }
      return script;
    });
  }
}

module.exports = {
  Script,
  versionColor,
  headerColor,
  bodyColor,
  debugColor,
  errorColor,
  successColor,
  warnColor,
};
