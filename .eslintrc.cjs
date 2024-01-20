module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "import",
    "unused-imports",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "tailwindcss"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // 組み込みモジュール
          "external", // npmでインストールした外部ライブラリ
          "internal", // 自作モジュール
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always", // グループ毎にで改行を入れる
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc", // 昇順にソート
          caseInsensitive: true, // 小文字大文字を区別する
        },
        pathGroups: [
          // 指定した順番にソートされる
          {
            pattern: "@hooks/*", // パターン
            group: "internal", // グループ名
            position: "before", // どの位置に挿入するか
          },
          {
            pattern: "@utilities/*", // パターン
            group: "parent", // グループ名
            position: "after", // どの位置に挿入するか
          },
          {
            pattern: "@components/*", // パターン
            group: "object", // グループ名
            position: "after", // どの位置に挿入するか
          },
          {
            pattern: "@types/*", // パターン
            group: "type", // グループ名
            position: "before", // どの位置に挿入するか
          },
        ],
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
