import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/market_prices_tg/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
