// "I texted my boss 'I love you' — I meant 'I will send it to you', and autocorrect chose violence."
// Byte-for-byte, single line, no trailing newline.
const LINE = "I texted my boss 'I love you' — I meant 'I will send it to you', and autocorrect chose violence.";

import { mkdirSync, writeFileSync } from "node:fs";

// Write the entry exactly as written in LINE, byte-for-byte.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
