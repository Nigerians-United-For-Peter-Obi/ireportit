import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const port = process.env.PORT || 4000

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  host: true,
  server: {
    proxy: {
      '/api/v1': {
        target: `https://localhost:${port}`,
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      '/api/v2': {
        target: `https://localhost:${port}`,
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
})
