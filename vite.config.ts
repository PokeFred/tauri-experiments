import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    base: '/',
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
    },
    build: {
        outDir: './build',
    },
    plugins: [svelte()],
})
