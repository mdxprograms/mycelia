// vitest-setup.js
import { defineConfig } from "vitest/config";

// In vitest.config.js, add the following
export default defineConfig({
  test: {
    environment: "happy-dom",
    setupFiles: ["vitest-setup.ts"],
  },
});
