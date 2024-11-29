import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist", // Specify the output directory for the production build
    assetsDir: "", // Assets directory relative to outDir
    // You can add more build options as needed
  },
});
