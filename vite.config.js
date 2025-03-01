import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: "/Chef-App",
  define: {
    'import.meta.env.VITE_HF_ACCESS_TOKEN': mode === 'development' 
      ? `"${process.env.VITE_HF_ACCESS_TOKEN}"` 
      : `""`  // Empty in production
  }
}));
