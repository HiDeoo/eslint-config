module.exports = {
  extends: [
    "@hideoo/eslint-config-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", disallowTypeAnnotations: false },
    ],
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: true },
    ],
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx"] },
    },
  },
};
