import { defineConfig } from 'vite';

export default defineConfig({
  base: '/realtime/',
  build: {
    outDir: '../../public/realtime',
    emptyOutDir: true
  },
  server: { port: 5173 }
});
