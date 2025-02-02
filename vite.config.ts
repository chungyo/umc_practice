import { defineConfig } from 'vite'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')},
      {find: '@app', replacement: path.resolve(__dirname, 'src/app')},
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@home',
        replacement: path.resolve(__dirname, 'src/pages/home'),
      },
      {
        find: '@shared',
        replacement: path.resolve(__dirname, 'src/shared'),
      },
    ]
  }
})
