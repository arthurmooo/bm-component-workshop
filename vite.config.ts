import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: { rollupOptions: { input: { atelier: "index.html", system: "design-system.html", dossiers: "dossier-demo.html" } } },
  server: { host: "127.0.0.1", port: 8767, strictPort: true },
});
