import { run } from "./run.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  await installWeb();
  await installServer();
}

async function installWeb() {
  await run(
    "npm",
    ["ci"],
    { cwd: path.resolve(__dirname, "../web") },
  );
}

async function installServer() {
  await run(
    "npm",
    ["ci"],
    { cwd: path.resolve(__dirname, "../server") },
  );
}

main();
