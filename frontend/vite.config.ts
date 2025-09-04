import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//   },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
