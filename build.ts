/**
 * Remove old files, copy front-end ones.
 */

import fs from 'fs';
import logger from 'jet-logger';
import childProcess from 'child_process';
import { resolve } from 'path';

/**
 * Start
 */
(async () => {
  try {
    const dist_path = resolve(__dirname, 'dist');
    const public_path = resolve(__dirname, 'public');

    await remove(dist_path);
    // Copy front-end files
    await copy(public_path, `${dist_path}\\public`);
    await copy('./src/views', `${dist_path}\\views`);
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
      fs.rm(loc, { recursive: true }, () => {});
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
      fs.cp(src, dest, { recursive: true }, () => {});
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
