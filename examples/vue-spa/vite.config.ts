import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import psitta from '@psitta/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    psitta({
      debug: true,
    }),
  ],
})
