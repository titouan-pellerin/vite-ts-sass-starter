import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: '8080',
    https: false,
    open: true,
  },
  resolve: {
    alias: [
      { find: '@ts', replacement: '/src/ts' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@glsl', replacement: '/src/glsl' },
    ]
  }
});
