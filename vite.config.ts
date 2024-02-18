import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {   // if withCredential don't use to api call
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8080",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
