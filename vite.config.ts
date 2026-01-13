import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // 这种定义方式最稳健，能确保代码中 process.env.API_KEY 能够被正确替换
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY || "")
    }
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext'
  }
});

