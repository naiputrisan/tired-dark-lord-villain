// The Tired Dark Lord: a 100-word villain monologue.
// The program writes the monologue to /output/entry.txt.
// Tiredness lives in the rhythm, the pauses and the small deflections;
// the speaker never says he is weary. He is a specific villain with a
// history (third eclipse this century) and a scheme (the rite).

import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "The eclipse, then. Third time this century I have climbed these stairs, " +
  "dagger in hand, waiting for the moon to — yes. The moon. The ravens " +
  "bring the omens before I ask, and half of them are wrong. Your king " +
  "sent a bard to spy on me. He sleeps in the east tower, snoring. I have " +
  "not decided: toad, or let him finish the verse. The rite needs three " +
  "drops of royal blood and one signature. Bring the ink. Bring the quiet, " +
  "too. If the stars could only... never mind. Kneel, or don't. The old " +
  "throne is cold either way.";

mkdirSync("/output", { recursive: true });

// The gate accepts UTF-8 text of 1 to 600 characters, not only whitespace.
// Refuse to write anything outside it rather than ship an invalid entry.
const text = MONOLOGUE.trim();
if (text.length < 1 || text.length > 600) {
  throw new Error(`entry length ${text.length} chars, outside the 1-600 gate`);
}
if (!/\S/.test(text)) {
  throw new Error("entry is whitespace only");
}
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.split(/\s+/).length} words, ${text.length} chars`);
