import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, type ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue({
        reactivityTransform: true
      }),
      vueJsx(),
      mockDevServerPlugin(),
      svgLoader()
    ],
    base: './',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      open: true,
      port: 8888,
      base: './',
      host: '0.0.0.0',
      proxy: {
        [env.VTIE_PREFIX]: {
          target: env.VITE_URL,
          changeOrigin: true,
          rewrite: (path) =>
            path.startsWith(env.VTIE_PREFIX) ? path.replace(env.VTIE_PREFIX, '') : path
        }
      }
    },
    build: {
      outDir: env.VITE_TITLE,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[hash].js',
          entryFileNames: 'js/[hash].js',
          assetFileNames: '[ext]/[hash].[ext]'
        }
      }
    }
  })
}
