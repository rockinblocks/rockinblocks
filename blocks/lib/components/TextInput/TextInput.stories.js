import TextInput from './TextInput.vue';
import data from './data';
import { action } from '@storybook/addon-actions';

const { description, placeholder, label, labelClass, name, inline, error } = data;

export default {
	title: 'Elements/TextInput',
	component: TextInput,
};

const Template = (args) => {
  const { value } =  args;
	const initialValue = value ? value : null;
  return {
    components: { TextInput },
    setup() {
      return { args };
    },
    data: () => ({ ...args, testData: initialValue }),
    template: `
      <TextInput
        v-model="testData"
        name="${args.name}"
        description="${args.description}"
        label="${args.label}"
        label-class="${args.labelClass}"
        placeholder="${args.placeholder}"
        :disabled="${args.disabled}"
        :required="${args.required}"
        :readOnly="${args.readOnly}"
        error="${args.error}"
        @change="change"
      />
    `,
    methods: {
			change: action('change'),
			input: action('input'),
		},
  };
}

export const Default = Template.bind({});
Default.args = {
	name,
	description,
	label,
	labelClass,
	placeholder
};

export const Inline = Template.bind({});
Inline.args = {
	name,
	description,
	label,
	labelClass,
	placeholder,
	inline
};

export const WithError = Template.bind({});
WithError.args = {
	name,
	description,
	label,
	labelClass,
	placeholder,
	inline,
  error
};



