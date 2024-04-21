<template>
	<div class="flex min-h-[100dvh] flex-col gap-section bg-surface">
		<header>header</header>
		<slot />
		<footer class="mt-auto">footer</footer>
	</div>
</template>

<script lang="ts" setup>
import { defineLayout } from '#pruvious'
defineLayout({
	label: 'Standard layout',
})
</script>
