import { copyFileSync, cpSync, mkdirSync, rmSync } from 'node:fs';

rmSync('public/assets', { recursive: true, force: true });
rmSync('public/index.html', { force: true });
mkdirSync('public', { recursive: true });

cpSync('dist/assets', 'public/assets', { recursive: true });
copyFileSync('dist/index.html', 'public/index.html');
