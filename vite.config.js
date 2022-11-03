import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: [
  //       'react-is',
  //       fileURLToPath(
  //         new URL('styled-components/dist/styled-components.browser.esm.js'),
  //         /node_modules/
  //       )
  //     ]
  //   }
  // }
  //node_modules/styled-components/dist/styled-components.browser.esm.js
}
