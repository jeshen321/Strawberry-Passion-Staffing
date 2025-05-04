import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";
import viteCompression from "vite-plugin-compression";
import path from "path";

export default defineConfig({
  plugins: [react(), sassDts(), viteCompression()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/global.module.scss";',
      },
    },
  },
});
