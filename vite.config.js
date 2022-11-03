import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default {
  plugins: [react(), viteCommonjs()],
  build: {
    rollupOptions: {
      external: [
        'react-is',
        fileURLToPath(
          new URL('styled-components/dist/styled-components.browser.esm.js'),
          /node_modules/
        )
      ]
    }
  }
  //node_modules/styled-components/dist/styled-components.browser.esm.js
}
