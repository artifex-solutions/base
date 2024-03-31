module.exports = {
	root: true,
	extends: [
		'@nuxt/eslint-config',
		'plugin:prettier/recommended', // should be last - enables both prettier plugin and enables eslint-config-prettier
	],

	plugins: ['@stylistic'],

	rules: {
		'prettier/prettier': 1, // Prettier rules are set to warnings but will be autofixed
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		camelcase: [
			'warn',
			{
				allow: [
					/* add non-camelCased variables that are valid here */
				],
			},
		],
		'@stylistic/object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		// Vue
		'vue/no-multiple-template-root': 'off',
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'vue/multi-word-component-names': 'off',
	},
}
