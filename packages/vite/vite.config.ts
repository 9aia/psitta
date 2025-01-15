import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'psitta-vite',
      fileName: format => `psitta-vite.${format}.js`,
      formats: ['es'],
    },

    rollupOptions: {
      external: ['fast-glob', 'node:fs', 'node:path', 'node:process', 'vite'],
    },
  },
  plugins: [dts({
    insertTypesEntry: true,
  })],
})
