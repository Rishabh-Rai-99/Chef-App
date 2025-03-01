import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); 

  return {
    plugins: [react(),tailwindcss()],
    base: "/Chef-App",
    define: {
      'import.meta.env.VITE_HF_ACCESS_TOKEN': `"${env.VITE_HF_ACCESS_TOKEN}"`
    }
  };
});
