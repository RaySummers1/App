import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'client', // Tells Vite to look inside the client folder
  build: {
    outDir: '../dist', // Builds to a folder outside client
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'client/index.html'),
        dashboard: resolve(__dirname, 'client/dashboard.html'),
        publish: resolve(__dirname, 'client/publishing-admin.html'),
        distribute: resolve(__dirname, 'client/distribute.html'),
        marketing: resolve(__dirname, 'client/marketing.html'),
        beat: resolve(__dirname, 'client/beat.html'),
        creator: resolve(__dirname, 'client/creator.html'),
        auth: resolve(__dirname, 'client/login-signup.html'),
        blog: resolve(__dirname, 'client/blog.html'),
      }
    }
  }
})
