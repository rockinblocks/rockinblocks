import Checkbox from './Checkbox.vue';
import data from './data';

const { description, placeholder, label, labelClass, name, inline } = data;

export default {
	title: 'Elements/Checkbox',
	component: Checkbox,
};

const Template = (args) => {
  const { value } =  args;
	const initialValue = value ? value : null;
  return {
    components: { Checkbox },
    setup() {
      return { args };
    },
    data: () => ({ ...args, testData: initialValue }),
    template: `
      <Checkbox
        v-model="testData"
        name="${args.name}"
        description="${args.description}"
        label="${args.label}"
        label-class="${args.labelClass}"
        placeholder="${args.placeholder}"
        :disabled="${args.disabled}"
        :required="${args.required}"
        :readOnly="${args.readOnly}"
        :inline="${args.inline}"
      />
    `,
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


