/**
 * Remove old files, copy front-end ones.
 */

import fs from 'fs';
import logger from 'jet-logger';
import childProcess from 'child_process';

/**
 * Start
 */
(async () => {
  try {
    // Remove current build
    await remove('./dist/');
    // Copy front-end files
    await copy('./public', './dist/public');
    // await copy('./src/views', './dist/views');
    // Copy back-end files
    await exec('tsc --build tsconfig.prod.json', './');
  } catch (err) {
    console.error(err);
  }
})();

/**
 * Remove file
 */
function remove(loc: string): Promise<void> {
  return new Promise((res, rej) => {
    try {
      fs.unlinkSync(loc);
      res();
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

/**
 * Copy file.
 */
function copy(src: string, dest: string): Promise<void> {
  return new Promise((res, rej) => {
    try {
      fs.copyFileSync(src, dest);
      res();
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

/**
 * Do command line command.
 */
function exec(cmd: string, loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return childProcess.exec(cmd, { cwd: loc }, (err, stdout, stderr) => {
      if (!!stdout) {
        logger.info(stdout);
      }
      if (!!stderr) {
        logger.warn(stderr);
      }
      return !!err ? rej(err) : res();
    });
  });
}
