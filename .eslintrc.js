module.exports = {
  root: true,
  extends: [
    'universe',
    'universe/native',
    'plugin:@react-three/recommended',
    // "universe/shared/typescript-analysis",
  ],
  // overrides: [
  //   {
  //     files: ["*.ts", "*.tsx", "*.d.ts"],
  //     parserOptions: {
  //       project: "./tsconfig.json",
  //     },
  //   },
  // ],
  plugins: ['react-hooks', '@ianvs/prettier-plugin-sort-imports'],
  rules: {
    // Ensures props and state inside functions are always up-to-date
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['error', { bracketSameLine: false }],
  },
};
