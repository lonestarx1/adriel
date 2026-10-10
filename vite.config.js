import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5173,
    strictPort: true
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      // One HTML page per language: / (English) and /ko/ (Korean).
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        ko: fileURLToPath(new URL("./ko/index.html", import.meta.url))
      },
      output: {
        assetFileNames: "assets/[name].[hash].[ext]",
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js"
      }
    }
  }
});
