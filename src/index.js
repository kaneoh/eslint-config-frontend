module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    "eslint-config-rolo",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier/react",
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
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
