#!/usr/bin/env node

const { spawn } = require('node:child_process');

(async () => {
  // If running the web server then migrate existing database
  if (process.argv.slice(2).join(' ') === 'npm run start') {
    await exec("DEBUG='prisma*' npx prisma migrate deploy");
  }

  // launch application
  await exec(process.argv.slice(2).join(' '));
})();

function exec(command) {
  const child = spawn(command, { shell: true, stdio: 'inherit' });
  return new Promise((resolve, reject) => {
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
}
