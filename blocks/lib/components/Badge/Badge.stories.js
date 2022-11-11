import Badge from './Badge.vue';

export default {
  title: 'Elements/Badge',
  component: Badge
};

const Template = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<Badge v-bind="args">Javascript</Badge>',
});

export const Default = Template.bind({});
Default.args = {};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  backgroundColor: "#000000"
};

export const Active = Template.bind({});
Active.args = {
  backgroundColor: "#000000",
  active: true
};