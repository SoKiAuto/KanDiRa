import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/KanDiRa/', // Important for GitHub Pages deployment
  plugins: [react()]
})
