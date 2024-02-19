/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";

dotenv.config();

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    define: {
      __VALUE__: `"${process.env.VALUE}"`,
    },
    test: {
      setupFiles: ["./src/config/test-utils/setup.ts"],
      include: ["**/*.test.tsx"],
      environment: "happy-dom",
      hideSkippedTests: true,
      globals: true,
      coverage: {
        provider: "v8",
        reporter: ["lcovonly"],
        reportOnFailure: true,
      },
    },
  });
};
