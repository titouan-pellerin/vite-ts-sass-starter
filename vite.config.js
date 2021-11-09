import { defineConfig } from 'vite';

export default defineConfig({
    server:
    {
        port: '8080',
        https: true,
        open: true
    }
});