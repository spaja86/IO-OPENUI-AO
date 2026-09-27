import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';

const keep = new Set(['realtime', 'chat', 'ai', 'bank', 'company', 'exchange']);

mkdirSync('public', { recursive: true });

for (const entry of readdirSync('public')) {
  if (keep.has(entry)) continue;
  rmSync(path.join('public', entry), { recursive: true, force: true });
}

cpSync('dist', 'public', { recursive: true });
