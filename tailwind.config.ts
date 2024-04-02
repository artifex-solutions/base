import type { Config } from 'tailwindcss'

export default {
	// This is not used when layer is consumed, so this is not defined in nuxt.config, since we only want this to happen in the playground
	content: [],
	theme: {
		extend: {
			colors: {
				test: '#ff0000',
			},
		},
	},
	plugins: [],
} satisfies Config
