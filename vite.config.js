// vite.config.js
import { resolve } from "path";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/mycelia.ts"),
      name: "mycelia",
      // the proper extensions will be added
      fileName: "mycelia",
    },
    test: {
      exclude: configDefaults.exclude,
    },
    rollupOptions: {
      output: {
        globals: {
          mycelia: "mycelia",
        },
      },
    },
  },
});
