import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    chunkSizeWarningLimit: 500, // Set your desired limit here (in KB)
  },
});