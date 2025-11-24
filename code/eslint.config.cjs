// Flat ESLint config using Next.js preset plus TypeScript parser/plugin.
// This config imports the `core-web-vitals` preset from `eslint-config-next`
// and then applies project-specific overrides (parser, plugin, ignores).
const nextPreset = require('eslint-config-next/core-web-vitals');
// Ensure we have an array to concat
const presetArray = Array.isArray(nextPreset) ? nextPreset : [nextPreset];

let parserModule = null;
let tsPluginModule = null;
try {
  parserModule = require('@typescript-eslint/parser');
} catch {
  parserModule = null;
}
try {
  tsPluginModule = require('@typescript-eslint/eslint-plugin');
} catch {
  tsPluginModule = null;
}

const overrides = {
  ignores: ['.next/**', 'node_modules/**', 'public/**'],
  languageOptions: parserModule
    ? {
        parser: parserModule,
        parserOptions: {
          ecmaVersion: 2024,
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      }
    : { ecmaVersion: 2024, sourceType: 'module' },
  plugins: tsPluginModule ? { '@typescript-eslint': tsPluginModule } : {},
  rules: {},
};

if (tsPluginModule) {
  // prefer TypeScript-aware no-unused-vars and disable base rule
  overrides.rules['@typescript-eslint/no-unused-vars'] = ['warn', { argsIgnorePattern: '^_' }];
  overrides.rules['no-unused-vars'] = 'off';
}

module.exports = [...presetArray, overrides];
