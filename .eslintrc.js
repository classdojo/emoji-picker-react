module.exports = {
  extends: ["classdojo/webpack", "plugin:testing-library/react"],
  plugins: ["jest", "testing-library"],
  parserOptions: {
    comment: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts"],
        moduleDirectory: [".", "node_modules"],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    curly: 0,
    indent: 0,
    "space-before-function-paren": 0,
    "react/prop-types": 1,
    "react/no-unused-prop-types": 2,
    "react/no-this-in-sfc": 2,
    "no-confusing-arrow": 0,
    camelcase: ["error", { properties: "never", allow: ["^UNSAFE_"] }],
    "default-case": 2,
    complexity: ["warn", 15],
    "max-len": 0,
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
  },
  env: {
    "jest/globals": true,
  },
  globals: {
    process: true,
  },
};
