<template>
	<span>
		<NuxtLink
			:to="link"
			class="inline-block whitespace-nowrap rounded-md bg-blue-600 px-4 py-3 text-white outline-none transition hover:bg-blue-700 focus:bg-blue-800 focus:ring-4"
		>
			{{ label }}
		</NuxtLink>
		<br />

		<TestComponent />
	</span>
</template>

<script lang="ts" setup>
import { defineBlock, linkField, textField } from '#pruvious'

defineBlock({ icon: 'Mouse' })

defineProps({
	link: linkField({ required: true }),
	label: textField({ required: true }),
})
</script>
