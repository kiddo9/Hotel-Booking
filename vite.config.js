import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     'react-router-dom': 'react-router-dom/dist/react-router-dom.js',
  //   },
  // },
  plugins: [react()],
})
