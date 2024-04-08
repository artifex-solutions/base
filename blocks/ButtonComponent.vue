<template>
	<button
		class="inline-block whitespace-nowrap rounded px-md py-sm outline-none transition focus:ring-4"
		:class="severityClasses[severity]"
	>
		{{ label }}
	</button>
</template>

<script lang="ts" setup>
import { defineBlock, selectField, textField } from '#pruvious'

defineBlock({ icon: 'Mouse' })

defineProps({
	label: textField({ required: true }),
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
			ghost: 'Ghost',
			glass: 'Glass',
		},
		default: 'secondary',
		required: true,
		placeholder: 'Select a severity',
	}),
})

const severityClasses = {
	primary: 'bg-primary hover:bg-primary-alt text-primary-content',
	secondary: 'bg-secondary hover:bg-secondary-alt text-secondary-content',
	contrast: 'bg-contrast hover:bg-contrast-alt text-contrast-content',
	success: 'bg-success hover:bg-success-alt text-success-content',
	help: 'bg-help hover:bg-help-alt text-help-content',
	info: 'bg-info hover:bg-info-alt text-info-content',
	warning: 'bg-warning hover:bg-warning-alt text-warning-content',
	danger: 'bg-danger hover:bg-danger-alt text-danger-content',
	ghost: 'bg-surface hover:bg-surface-alt text-surface-content',
	glass: 'bg-glass hover:bg-white/20 text-surface-content',
}
</script>
