import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const viteBase = process.env.VITE_BASE

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: viteBase
    ? viteBase.endsWith('/')
      ? viteBase
      : `${viteBase}/`
    : '/',
})
