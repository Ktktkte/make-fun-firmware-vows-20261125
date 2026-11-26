// Firmware vows v2 — writes the robot wedding vow in entry.txt to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Gate: the entry must be one non-empty line of 1-200 characters.
// validateEntry throws on the first rule the text breaks, so a bad
// entry fails loudly here instead of shipping a rejected artifact.
function validateEntry(text) {
  if (!text.trim()) throw new Error("entry.txt is empty or only whitespace");
  if (text.includes("\n") || text.includes("\r")) throw new Error("entry.txt must be a single line");
  if (text.length < 1 || text.length > 200) throw new Error("entry.txt must be 1-200 characters");
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const entryPath = join(scriptDir, "entry.txt");
const text = readFileSync(entryPath, "utf8");
validateEntry(text);

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
