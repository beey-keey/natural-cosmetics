import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Map @ to the src directory
    },
  },
  build: {
    outDir: "dist", // Specify the output directory for the production build
    assetsDir: "", // Assets directory relative to outDir
    // You can add more build options as needed
  },
});
