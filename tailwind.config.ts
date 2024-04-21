import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
extend([mixPlugin])

export default {
	// This is not used when layer is consumed, so this is not defined in nuxt.config, since we only want this to happen in the playground
	content: [
		'./blocks/**/*.vue',
		'./components/**/*.vue',
		'./layouts/**/*.vue',
		'./presets/base/**/*.js',
	],
	darkMode: 'media', // Toggleable dark mode: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
	theme: {
		borderRadius: {
			none: defaultTheme.borderRadius.none,
			full: defaultTheme.borderRadius.full,
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			lg: '1rem',
		},
		extend: {
			colors: () => {
				const surface = colord('hsl(210 40% 97%)')
				const primary = colord('hsl(161 82% 36%)')
				const secondary = colord('hsl(210 40% 93%)')
				const contrast = colord('hsl(194 100% 41%)')
				const success = colord('hsl(161 82% 36%)')
				const help = colord('hsl(213 97% 87%)')
				const info = colord('hsl(213 97% 87%)')
				const muted = colord('hsl(215 20% 65%)')
				const warning = colord('hsl(30 100% 48%)')
				const danger = colord('hsl(12 92% 50%)')

				return {
					// Backgrounds
					surface: {
						DEFAULT: surface.toHslString(),
						alt: createAltColor(surface),
						content: createContentColor(surface),
						section: 'hsl(210 16.7% 92.2%)',
						card: 'hsl(0 0% 100%)',
					},
					// Brand color
					primary: {
						DEFAULT: primary.toHslString(),
						alt: createAltColor(primary),
						content: createContentColor(primary),
					},
					// Neutral color
					secondary: {
						DEFAULT: secondary.toHslString(),
						alt: createAltColor(secondary),
						content: createContentColor(secondary),
					},
					// Highlight/CTA/accent color
					contrast: {
						DEFAULT: contrast.toHslString(),
						alt: createAltColor(contrast),
						content: createContentColor(contrast),
					},
					// placeholders + disabled elements
					muted: {
						DEFAULT: muted.toHslString(),
						content: createContentColor(muted),
					},
					success: {
						DEFAULT: success.toHslString(),
						alt: createAltColor(success),
						content: createContentColor(success),
					},
					help: {
						DEFAULT: help.toHslString(),
						alt: createAltColor(help),
						content: createContentColor(help),
					},
					info: {
						DEFAULT: info.toHslString(),
						alt: createAltColor(info),
						content: createContentColor(info),
					},
					warning: {
						DEFAULT: warning.toHslString(),
						alt: createAltColor(warning),
						content: createContentColor(warning),
					},
					danger: {
						DEFAULT: danger.toHslString(),
						alt: createAltColor(danger),
						content: createContentColor(danger),
					},
				}

				function createAltColor(clr: ReturnType<typeof colord>): string {
					const modified = clr.isDark() ? clr.lighten(0.07) : clr.darken(0.07)

					return modified.toHslString()
				}

				function createContentColor(clr: ReturnType<typeof colord>): string {
					const contentLightness = clr.isDark() ? 95 : 15

					const newColor = clr.toHsl()
					newColor.l = contentLightness

					return colord(newColor).toHslString()
				}
			},
			borderColor: {
				DEFAULT: 'hsl(213 27% 84%)',
			},
			borderWidth: {
				DEFAULT: '2px',
			},
			ringColor: ({ theme }) => ({
				DEFAULT: theme('colors.primary.DEFAULT'),
			}),
			spacing: {
				xs: '0.25rem', // e.g. space between small badges in a list
				sm: '0.5rem', // e.g. space between bigger elements in a list
				md: '1rem', // e.g. paddings and margins for buttons or molecules
				lg: '2rem', // e.g. padding and margins for cards or organisms
				// xl: '4rem',
				section: '4rem', // e.g. space between sections on a page
			},
		},
	},
	// See plugins functions here: https://tailwindcss.com/docs/plugins
	plugins: [
		// Overlay / mask component
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.bg-overlay': {
					background: 'hsl(0 0% 0% / 10%)',
					backdropFilter: `blur(${theme('backdropBlur.sm')})`,
				},
				'.bg-glass': {
					background: 'hsl(0 0% 100% / 10%)',
					backdropFilter: `blur(${theme('backdropBlur.sm')})`,
				},
			})
		}),
	],
} satisfies Config
