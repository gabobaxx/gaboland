module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	// parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		// 'plugin:@typescript-eslint/recommended',
	],
	overrides: [
		{
			files: ['*.jsx', '*.js' /*, '*.tsx'*/],
		},
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 6,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 'off',
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
	ignorePatterns: ['public/*']
};
