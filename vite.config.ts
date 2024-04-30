import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/podcaster-app/' : '/',
  resolve: {
    alias: [
      {
        find: '@shared',
        replacement: path.resolve(__dirname, './src/shared'),
      },
      {
        find: '@core',
        replacement: path.resolve(__dirname, './src/core'),
      },
    ],
  },
  plugins: [
    react(),
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
})
