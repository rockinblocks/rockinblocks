import Alert from './Alert.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Elements/Alert',
  component: Alert
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Alert },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Alert v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  title: "Here is a non-urgent update.",
  titleClass: "font-semibold text-lg",
  content: "This is the alert message",
  contentClass: "text-slate-500 text-md"
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Success.args = {
  type: "success",
  title: "You did it!",
  titleClass: "font-semibold text-lg",
  content: "This is the alert message",
  contentClass: "text-slate-500 text-md"
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Warning.args = {
  type: "warning",
  title: "There was a small issue...",
  titleClass: "font-semibold text-lg",
  content: "This is the alert message",
  contentClass: "text-slate-500 text-md"
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Danger.args = {
  type: "danger",
  title: "Something has gone terribly wrong!",
  titleClass: "font-semibold text-lg",
  content: "This is the alert message",
  contentClass: "text-slate-500 text-md"
};

export const Shadow = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Shadow.args = {
  shadow: true,
  title: "Here is a non-urgent update.",
  titleClass: "font-semibold text-lg",
  content: "This is the alert message",
  contentClass: "text-slate-500 text-md"
};

export const Dismissible = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Dismissible.args = {
  dismissible: true,
  title: "Here is a non-urgent update.",
  titleClass: "font-semibold text-lg",
  content: "This is the alert message",
  contentClass: "text-slate-500 text-md"
};

export const LongContent = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
LongContent.args = {
  title: "Here is a non-urgent update.",
  titleClass: "font-semibold text-lg",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  contentClass: "text-slate-500 text-md"
};