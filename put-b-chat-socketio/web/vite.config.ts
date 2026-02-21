import { defineConfig } from 'vite';

export default defineConfig({
  base: '/chat/',
  build: {
    outDir: '../../chat',
    emptyOutDir: true
  },
  server: { port: 5174 }
});
