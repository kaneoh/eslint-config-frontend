module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    "eslint-config-rolo",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "react-hooks"],
  overrides: [
    {
      files: ["webpack.*.js"],
      env: {
        es6: true,
        node: true,
      },
    },
  ],
  globals: {
    React: "readonly",
    SparkCommunications: "readonly",
    process: "readonly",
    JitsiMeetJS: "readonly",
  },
  rules: {
    "valid-jsdoc": "off",
    "prettier/prettier": "error",
    "new-cap": "off",
    "react/no-unused-prop-types": "error",
    "react/jsx-handler-names": "error",
    "react/display-name": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
