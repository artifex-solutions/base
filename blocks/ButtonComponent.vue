<template>
	<LayoutSection>
		<Button
			:label="label"
			:severity="btnSeverity"
			:link="link"
			:raised="raised"
			:rounded="rounded"
			:outlined="outlined"
			:text="text"
			:class="{ 'bg-glass': glass }"
		/>
	</LayoutSection>
</template>

<script lang="ts" setup>
import { defineBlock, selectField, textField, switchField } from '#pruvious'
import type { PropType } from 'vue'

defineBlock({
	icon: 'Diamond',
	// Overrides the automatically generated block label
	label: 'Custom button',

	// Text displayed in the block picker
	description: 'This is a test component',

	// Slot labels and allowed child blocks
	slots: {},
})

const props = defineProps({
	label: textField({ required: true }),
	text: switchField({
		label: 'Display only text',
		default: false,
	}),
	outlined: switchField({
		label: 'Display with outline instead of background',
		default: false,
	}),
	rounded: switchField({
		label: 'Display as pill shape',
		default: false,
	}),
	raised: switchField({
		label: 'Display with a shadow',
		default: false,
	}),
	link: switchField({
		label: 'Display as link',
		default: false,
	}),
	glass: switchField({
		label: 'Display glassmorphic',
		default: false,
	}),
	severity: selectField({
		choices: {
			primary: 'Primary',
			secondary: 'Secondary',
			contrast: 'Contrast',
			success: 'Success',
			help: 'Help',
			info: 'Info',
			warning: 'Warning',
			danger: 'Danger',
		},
		default: 'secondary',
		required: true,
		placeholder: 'Select a severity',
	}) as PropType<
		'primary' | 'secondary' | 'contrast' | 'success' | 'help' | 'info' | 'warning' | 'danger'
	>,
})

const btnSeverity = computed(() => {
	return props.severity === 'primary' ? undefined : props.severity
})
</script>
