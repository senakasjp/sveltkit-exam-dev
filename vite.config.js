import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: "/",  // Keep this as is unless your deployment requires a specific base path
  plugins: [svelte()],
  server: {
    host: '0.0.0.0',  // Bind to all IP addresses to ensure accessibility from outside Docker
    port: 3000,       // Use port 3000 or change it if necessary
    strictPort: true, // Fail if port is already in use
    watch: {
      usePolling: true,  // Enable polling to detect file changes in Docker
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    // You can define other environment variables here as needed
  },
});
