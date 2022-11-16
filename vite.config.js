import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/comments-section/",
  plugins: [svelte()],
  optimizeDeps: {
    exclude: ['@urql/svelte'],
  }
})
