// vite.config.js
import { resolve } from "path";
import { configDefaults } from "vitest/config";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/mycelia.ts"),
      name: "mycelia",
      fileName: "mycelia",
    },
    test: {
      exclude: configDefaults.exclude,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          mycelia: "mycelia",
        },
      },
    },
  },
});
