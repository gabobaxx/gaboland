module.exports = {
	files: ['*.jsx', '*.js', '*.tsx'],
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
	ignores: [
		'public/*',
		'gatsby-node.js',
		'gatsby-config.js',
		'api/*',
		'public/build/_shared/chunk-HELEGESD.js',
	],
};
