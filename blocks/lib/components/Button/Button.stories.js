import Button from './Button.vue';

export default {
  title: 'Elements/Button',
  component: Button
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Javascript</Button>',
});

export const Default = Template.bind({});
Default.args = {};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  backgroundColor: "#6d28d9"
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary"
};

export const Success = Template.bind({});
Success.args = {
  type: "success"
};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger"
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning"
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  backgroundColor: "#6d28d9"
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  backgroundColor: "#6d28d9"
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  backgroundColor: "#6d28d9"
};