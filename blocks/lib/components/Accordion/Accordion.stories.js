import Accordion from './Accordion.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Elements/Accordion',
  component: Accordion
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Accordion },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<accordion v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Expand Your Mind',
  labelClass: 'font-bold',
  content: 'Listen to The Jimi Hendrix Experience!',
  contentClass: 'text-slate-500',
};

export const Open = Template.bind({});
Open.args = {
  label: 'Expand Your Mind',
  labelClass: 'font-bold',
  content: 'Listen to The Jimi Hendrix Experience!',
  contentClass: 'text-slate-500',
  initiallyOpen: true
};

export const LongContent = Template.bind({});
LongContent.args = {
  label: 'Expand Your Mind',
  labelClass: 'font-bold',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  contentClass: 'text-slate-500',
  initiallyOpen: true
};