module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true, // Jest global variables
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "jest"],
  rules: {
    /* PROBLEMS */
    "array-callback-return": 2,
    "no-await-in-loop": 2,
    "no-duplicate-imports": 2,
    "no-self-compare": 2,
    "no-template-curly-in-string": 2,
    "no-unmodified-loop-condition": 2,
    "no-unreachable-loop": 2,

    /* STYLE */
    "arrow-body-style": [2, "as-needed"],
    camelcase: 2,
    "consistent-return": 2,
    "func-style": [2, "declaration", { allowArrowFunctions: true }],
    "no-array-constructor": 2,
    "no-eval": 2,
    "no-lonely-if": 2,
    "no-return-await": 2,
    "no-useless-return": 2,
    "no-var": 2,
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "require-await": 2,
    "spaced-comment": 2,

    /* STANDARD-WITH-TYPESCRIPT */
    "@typescript-eslint/no-require-imports": 2,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/ban-ts-comment": 0,
  },
};
