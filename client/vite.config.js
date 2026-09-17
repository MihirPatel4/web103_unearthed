import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'index.html',
        gift: 'gift.html'
      }
    }
  },
  server: {
    proxy: {
      '/gifts': {
        target: 'http://localhost:3001'
      }
    }
  }
});