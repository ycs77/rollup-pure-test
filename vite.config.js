import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    polyfillModulePreload: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
