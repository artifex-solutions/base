import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Use this instead of @ in paths
const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['pruvious', 	'@vueuse/nuxt',
  '@vue-macros/nuxt'],

  nitro: {
		// preset: 'bun',
	},

  typescript: {
		strict: true,
	},

  $development: {
		sourcemap: true,
	},

	experimental: {
		typedPages: true,
	},
})
