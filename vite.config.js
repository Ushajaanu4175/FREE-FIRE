import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        guild: '/guild.html',
        players: '/players.html',
        contact: '/contact.html',
      }
    }
  }
})
