import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    // The temporary Arena preview is served from a subdomain of e2b.app.
    allowedHosts: ['.e2b.app'],
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
