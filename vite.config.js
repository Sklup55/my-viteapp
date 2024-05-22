import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows connections from any IP address
    port: 5173, // Ensure this matches the port your virtual lab environment uses
    hmr: {
      protocol: 'wss', // Use WebSocket Secure for HMR
      host: 'ksundararaja-5173.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai', // Your virtual environment host
      clientPort: 443, // Use the default port for HTTPS
    },
  },
  base: '', // Ensure Vite uses relative paths
})
