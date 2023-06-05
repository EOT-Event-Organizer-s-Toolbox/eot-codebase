import { run } from "./run.mjs";
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

main();
