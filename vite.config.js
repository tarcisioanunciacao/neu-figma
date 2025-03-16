import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/neu-figma/',
  plugins: [],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
