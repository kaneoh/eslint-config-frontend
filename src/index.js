module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  extends: [
    "google",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: ["prettier", "import", "react-hooks"],
  overrides: [
    {
      files: ["webpack.*.js"],
      env: {
        es6: true,
        node: true,
      },
    },
  ],
  ignorePatterns: ["node_modules/", "lib/"],
  parser: "@babel/eslint-parser",
  globals: {
    React: "readonly",
    SparkCommunications: "readonly",
    process: "readonly",
    JitsiMeetJS: "readonly",
  },
  rules: {
    indent: "off",
    "eol-last": "off",
    "comma-dangle": "off",
    semi: "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "quote-props": "off",
    "space-before-blocks": "off",
    "computed-property-spacing": "off",
    "comma-spacing": "off",
    "brace-style": "off",
    "linebreak-style": ["error", "unix"],
    quotes: "off",
    "require-jsdoc": "off",
    "max-len": "off",
    "operator-linebreak": "off",
    "valid-jsdoc": "off",
    "no-console": "error",
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "new-cap": "off",
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "no-unused-vars": ["error", { args: "after-used" }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["./src"],
      },
      "babel-module": {
        root: "./src",
        alias: {
          test: "./test",
          env: "./env",
          lib: "./lib",
        },
      },
    },
  },
};
