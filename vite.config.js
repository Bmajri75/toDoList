import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // Vite cherche index.html dans src/
  publicDir: "../public", // Chemin vers public/ depuis src/
  build: {
    outDir: "../dist", // Build dans dist/ à la racine
    emptyOutDir: true, // Vide dist/ avant chaque build
  },
});
