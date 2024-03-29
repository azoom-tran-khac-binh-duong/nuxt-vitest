import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: [
        'vue',
      ],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
