import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "public"),
    }, // Must be sync with tsconfig.json and eslint.config.js
  },
  // Vitest configuration
  test: {
    globals: true, // No need to import describe, it, etc.
    environment: "jsdom", // Browser-like environment for frontend tests (access to the DOM)
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "dist", "coverage", "public"],
    coverage: {
      provider: "v8", // Use v8 for code coverage
      reporter: ["html"],
      reportsDirectory: "./coverage",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.d.ts"],
    },
    testTimeout: 30000, // Global timeout (in milliseconds)
    maxConcurrency: 5, // Maximum number of tests to run in parallel
  },
});
