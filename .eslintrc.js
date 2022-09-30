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
	rules: {
		'react/prop-types': 'off',
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
	extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
	overrides: [
		{
			files: ['*.jsx', '*.js', '*.tsx'],
		},
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 10,
		sourceType: 'module',
	},
	ignorePatterns: ['public/*', 'gatsby-node.js', 'gatsby-config.js', 'api/*'],
};
