module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/function-component-definition": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "arrow-body-style": "off",
    "no-shadow": "off",
    "no-shadow": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/jsx-no-useless-fragment": "off"
  },
};
