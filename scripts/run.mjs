import { spawn } from "child_process";

/**
 * @typedef {{ cwd: string }} RunOptions
 * @param {string} command
 * @param {string[]} args
 * @param {RunOptions} options
 */
export async function run(
  command,
  args,
  options,
) {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(
      command,
      args,
      {
        detached: true,
        stdio: "inherit",
        cwd: options.cwd,
      },
    );

    childProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(code);
      }
    });

    childProcess.on("error", (err) => reject(err));
  });
}
