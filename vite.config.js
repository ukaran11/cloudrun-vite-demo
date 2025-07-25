import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        rollupNodePolyFill()
      ]
    }
  },
  resolve: {
    alias: {
      // Optional but recommended
      crypto: 'rollup-plugin-node-polyfills/polyfills/crypto-browserify',
      stream: 'rollup-plugin-node-polyfills/polyfills/stream',
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6'
    }
  },
  define: {
    global: 'globalThis'
  }
})
