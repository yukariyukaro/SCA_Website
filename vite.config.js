import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isWindows = process.platform === 'win32'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'github' ? '/SCA_Website/' : '/'

  return {
    base,
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-slot', 'lucide-react', 'clsx', 'tailwind-merge'],
            'vendor-utils': ['lodash-es', 'swiper'],
          },
        },
      },
    },
    plugins: [
      react({
        babel: {
          plugins: isWindows
            ? []
            : [
                // other Babel plugins
                [
                  '@locator/babel-jsx/dist',
                  {
                    env: 'development',
                  },
                ],
              ],
        },
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
