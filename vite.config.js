import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        project: 'myProject.html', // Add your new file here
        // certifications: 'certifications.html' // You likely need this one too!
      },
    },
  },
})
