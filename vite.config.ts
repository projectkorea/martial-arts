import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  const base = isBuild ? '/static/mbti' : '/mbti'
  const outDir = isBuild ? `../../public/${base}` : './build'
  
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
      outDir,
      emptyOutDir: true,
      sourcemap: true,
      assetsDir: 'assets'
    },
  }
})
