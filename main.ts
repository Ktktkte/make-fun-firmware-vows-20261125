import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const vow =
  "I take you as my partner, through every firmware update and every low-battery night, because you are the one process I will never kill to save power.";

// Gate: the entry must be a single line of 1 to 200 characters.
if (vow.length < 1 || vow.length > 200 || vow.includes("\n")) {
  throw new Error(`vow must be one line of 1-200 characters, got ${vow.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), vow + "\n", "utf8");
