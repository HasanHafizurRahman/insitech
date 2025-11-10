import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler'], // ✅ valid babel plugin name
        ],
      },
    }),

    // ✅ Tailwind v4 plugin goes here at the root
    tailwindcss(),
  ],
})
