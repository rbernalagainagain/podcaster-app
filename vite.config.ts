import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, './src/shared/hooks'),
      },
      {
        find: '@core',
        replacement: path.resolve(__dirname, './src/core'),
      },
      {
        find: '@shared',
        replacement: path.resolve(__dirname, './src/shared'),
      },
      {
        find: '@podcasts',
        replacement: path.resolve(__dirname, './src/modules/podcast/*'),
      },
    ],
  },
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      srcDir: 'src',
      filename: 'sw.js',
      strategies: 'injectManifest',
      injectRegister: false,
      injectManifest: {
        injectionPoint: undefined,
      },
      devOptions: {
        enabled: true,
        /* other options */
      },
      manifest: false,
      registerType: 'autoUpdate',
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test.setup.ts',
  },
})
