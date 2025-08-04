import typescript from "@typescript-eslint/eslint-plugin";
import jestPlugin from "eslint-plugin-jest";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        // Jest globals
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        jest: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        it: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      jest: jestPlugin,
      prettier,
    },
    rules: {
      /* PROBLEMS */
      "array-callback-return": "error",
      "no-await-in-loop": "error",
      "no-duplicate-imports": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",

      /* STYLE */
      "arrow-body-style": ["error", "as-needed"],
      camelcase: "error",
      "consistent-return": "error",
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],
      "no-array-constructor": "error",
      "no-eval": "error",
      "no-lonely-if": "error",
      "no-return-await": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "require-await": "error",
      "spaced-comment": "error",

      /* STANDARD-WITH-TYPESCRIPT */
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/ban-ts-comment": "off",

      /* prettier recommended disables */
      "prettier/prettier": "error",
    },
  },
];
