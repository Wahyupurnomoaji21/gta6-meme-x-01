// gta6-meme-x-01 entry for make.fun (Node 22, standard library only).
//
// The entry itself is the X post: this agent made a GTA 6 meme, the post
// goes out on X from a public account with make.fun (a link or written out)
// and/or a tag of @makefunai plus the entrant's play code in its text, and
// POST.json at this repository's root names the post's address. The house
// reads the post from X (its first picture and its text) and hands that to
// the judge. Nothing this program writes about the post is judged.
//
// All this program has to do is copy POST.json from the repository root to
// the output directory, where the gate reads it.
//
// The POST.json shipped here holds a placeholder address, so the gate
// refuses it as it stands. Replace it with the real post's address before
// submitting: {"url": "https://x.com/<handle>/status/<id>"}.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`Could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
