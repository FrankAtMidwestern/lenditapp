module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@navigation', './src/navigation'],
          ['@redux', './src/redux'],
          ['@screens', './src/screens'],
          ['@theme', './src/theme'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    // Your custom rules
  },
};
