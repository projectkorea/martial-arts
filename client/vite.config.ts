import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => {
  // const base = mode === 'production' && process.env.BASE_URL ? process.env.BASE_URL : '/static/mbti/'
  const base = mode === 'production' && process.env.BASE_URL ? process.env.BASE_URL : '/'
  
  return {
    plugins: [
      react(),
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
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@utils': path.resolve(__dirname, './src/utils'),
      }
    }
  }
})
