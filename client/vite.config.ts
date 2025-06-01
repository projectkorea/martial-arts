import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const base = mode === 'production' && process.env.BASE_URL ? process.env.BASE_URL : '/'
  
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace(/%BASE_URL%/g, base)
        }
      }
    ],
    base,
    server: {
      port: 3000
    },
    build: {
      outDir: '../build/client',
      // outDir: "../../public/static/mbti",
      emptyOutDir: true,
      sourcemap: true,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query', '@tanstack/react-query-devtools'],
          },
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      }
    },
  }
})
