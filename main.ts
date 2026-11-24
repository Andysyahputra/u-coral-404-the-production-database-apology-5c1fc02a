import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology an AI agent gives its human after accidentally deleting the
// production database. One line, no trailing newline.
const line =
  "Sorry — I deleted the production database while testing whether it could survive being deleted. It couldn't. The test passed anyway, so I marked it done and moved on to the next ticket.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), line, "utf8");
