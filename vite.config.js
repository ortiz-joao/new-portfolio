import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { templateCompilerOptions } from '@tresjs/core'

// https://vite.dev/config/
export default defineConfig({
  base: 'new-portfolio',
  plugins: [
    vue({
      ...templateCompilerOptions
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
