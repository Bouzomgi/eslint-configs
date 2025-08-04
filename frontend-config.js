import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier: prettierPlugin,
    },
    rules: {
      /* STYLE */
      "no-console": "warn",
      "no-magic-numbers": "warn",

      /* REACT */
      "react/boolean-prop-naming": "error",
      "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
      ],
      "react/forbid-prop-types": "error",
      "react/hook-use-state": "error",
      "react/jsx-boolean-value": ["error", "always"],
      "react/jsx-closing-bracket-location": "error",
      "react/jsx-closing-tag-location": "error",
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/jsx-curly-spacing": ["error", { when: "never" }],
      "react/jsx-equals-spacing": ["error", "never"],
      "react/jsx-fragments": "error",
      "react/jsx-handler-names": "error",
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-indent": "off",
      "react/jsx-no-constructed-context-values": "warn",
      "react/jsx-no-script-url": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-props-no-multi-spaces": "error",
      "react/jsx-tag-spacing": "error",
      "react/no-danger": "error",
      "react/no-did-mount-set-state": "error",
      "react/no-did-update-set-state": "error",
      "react/no-namespace": "error",
      "react/no-this-in-sfc": "error",
      "react/no-typos": "error",
      "react/no-unused-class-component-methods": "error",
      "react/no-unused-prop-types": "error",
      "react/no-unused-state": "warn",
      "react/no-will-update-set-state": "error",
      "react/prefer-es6-class": "error",
      "react/prefer-exact-props": "error",
      "react/prefer-read-only-props": "error",
      "react/prefer-stateless-function": "error",
      "react/react-in-jsx-scope": "off",

      /* REACT-HOOKS */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
