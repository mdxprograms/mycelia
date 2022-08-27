// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/mycelia.ts"),
      name: "mycelia",
      // the proper extensions will be added
      fileName: "mycelia",
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
