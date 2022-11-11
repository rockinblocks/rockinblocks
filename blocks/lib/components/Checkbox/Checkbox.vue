<script>
export default {
	props: {
		name: {
			type: String,
			default: null,
		},
		value: {
			type: Boolean,
			default: null,
		},
		description: {
			type: String,
			default: null,
		},
		placeholder: {
			type: String,
			default: null,
		},
		label: {
			type: String,
			default: null,
		},
		labelClass: {
			type: String,
			default: null,
		},
		validFeedback: {
			type: String,
			default: null,
		},
		invalidFeedback: {
			type: String,
			default: null,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		required: {
			type: Boolean,
			default: false,
		},
		readOnly: {
			type: Boolean,
			default: false,
		},
		onChange: {
			type: Function,
			default: null,
		},
		onValid: {
			type: Function,
			default: null,
		},
		inline: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		/**
			 * The value passed in as the v-model for the input
			 */
		inputValue: {
			get() {
				return this.value;
			},
			set(newValue) {
				this.$emit('input', newValue);
			},
		},
	},
	methods: {
		change({ target }) {
      const { value } = target;
      console.log({value})
      this.inputValue = value;
			this.$emit('change', { name: this.name, value: this.inputValue });
		},
	},
};
</script>

<template>
	<div>
		<div>
			<input
				:id="name"
				:ref="name"
				v-model="inputValue"
				type="checkbox"
				class="mr-2"
				value="1"
				:name="name"
				:disabled="disabled"
				:required="required"
				:readonly="readOnly"
				@input="change"
			>
			<label :for="name">
				{{ label }}
			</label>
		</div>
		<!-- <span
			v-if="errors && errors.has(name)"
			class="is-error form-text text-danger"
		>
			<span>{{ errors.first(name) }}</span>
		</span> -->
		<span
			v-if="description"
			class="text-sm text-slate-500"
		>
			{{ description }}
		</span>
	</div>
</template>

<style scoped>

</style>
