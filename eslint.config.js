import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import vitest from "@vitest/eslint-plugin";
import globals from "globals";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["tsconfig.json"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier,
      vitest,
    },
    rules: {
      /*Preset rules*/
      ...js.configs.recommended.rules,
      ...tsPlugin.configs["recommended-requiring-type-checking"].rules,
      ...tsPlugin.configs.strict.rules,
      ...vitest.configs.recommended.rules,

      /*Custom rules*/
      "prettier/prettier": "error",
      "no-console": "warn",
      semi: ["warn", "always"],
    },
  },
];
