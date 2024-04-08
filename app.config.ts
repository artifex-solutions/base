export default defineAppConfig({
	testConfig: 'Hello from test config',
})

declare module '@nuxt/schema' {
	interface AppConfigInput {
		testConfig?: string
	}
}
