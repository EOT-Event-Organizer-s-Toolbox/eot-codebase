import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  await buildWeb();
  await buildServer();
}

async function buildWeb() {
  await run(
    "npm",
    ["ci"],
    { cwd: path.resolve(__dirname, "../web") },
  );
  await run(
    "npm",
    ["run", "build"],
    { cwd: path.resolve(__dirname, "../web") },
  );
}

async function buildServer() {
  await run(
    "npm",
    ["ci"],
    { cwd: path.resolve(__dirname, "../server") },
  );
  await run(
    "npm",
    ["run", "build"],
    { cwd: path.resolve(__dirname, "../server") },
  );
}

/**
 * @typedef {{ cwd: string }} RunOptions
 * @param {string} command
 * @param {string[]} args
 * @param {RunOptions} options
 */
async function run(
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

main();

