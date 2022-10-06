// vitest-setup.js
import { defineConfig } from "vitest/config";

// In vitest.config.js, add the following
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/mycelia.ts"),
      name: "mycelia",
      filename: "mycelia",
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
  test: {
    environment: "happy-dom",
    setupFiles: ["vitest-setup.ts"],
  },
});
