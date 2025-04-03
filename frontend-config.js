module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "react-app",
    "react-app/jest",
    "@bouzomgi/base/backend",
  ],
  rules: {
    /* STYLE */
    "no-console": 1,
    "no-magic-numbers": 1,

    /* REACT */
    "react/boolean-prop-naming": 2,
    "react/destructuring-assignment": [
      2,
      "always",
      { destructureInSignature: "always" },
    ],
    "react/forbid-prop-types": 2,
    "react/hook-use-state": 2,
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-closing-tag-location": 2,
    "react/jsx-curly-brace-presence": [2, "never"],
    "react/jsx-curly-spacing": [2, { when: "never" }],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-fragments": 2,
    "react/jsx-handler-names": 2,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-indent": 0,
    "react/jsx-no-constructed-context-values": 1,
    "react/jsx-no-script-url": 2,
    "react/jsx-no-useless-fragment": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-props-no-multi-spaces": 2,
    "react/jsx-tag-spacing": 2,
    "react/no-danger": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-namespace": 2,
    "react/no-this-in-sfc": 2,
    "react/no-typos": 2,
    "react/no-unused-class-component-methods": 2,
    "react/no-unused-prop-types": 2,
    "react/no-unused-state": 1,
    "react/no-will-update-set-state": 2,
    "react/prefer-es6-class": 2,
    "react/prefer-exact-props": 2,
    "react/prefer-read-only-props": 2,
    "react/prefer-stateless-function": 2,
    "react/react-in-jsx-scope": 0,

    /* REACT-HOOKS */
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
  plugins: ["prettier"],
};
