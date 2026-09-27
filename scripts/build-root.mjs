import { copyFileSync, cpSync, rmSync } from 'node:fs';

rmSync('public/assets', { recursive: true, force: true });
rmSync('public/index.html', { force: true });

cpSync('dist/assets', 'public/assets', { recursive: true });
copyFileSync('dist/index.html', 'public/index.html');
