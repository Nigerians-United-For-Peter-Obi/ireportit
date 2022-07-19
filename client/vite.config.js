import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api/v1': {
        target: `https://localhost:4000`,
        changeOrigin: true,
        secure: false
      },
      '/api/v2': {
        target: `https://localhost:4000`,
        changeOrigin: true,
        secure: false
      }
    }
  }
})
