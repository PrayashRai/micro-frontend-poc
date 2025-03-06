import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), tailwindcss(),
    federation({
      name: "emailApp",
      filename: "remoteEntry.js",
      exposes: {
        "./EmailApp": "./src/App.jsx", // ✅ Expose the entire ChatApp
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
