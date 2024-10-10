import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
	eslintPluginPrettierRecommended,
	{
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		rules: {
			eqeqeq: ['error', 'always'],
		},
		ignores: ['node_modules'],
	},
];
