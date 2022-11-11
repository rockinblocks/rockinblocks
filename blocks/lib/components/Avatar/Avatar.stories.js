import Avatar from './Avatar.vue';

export default {
  title: 'Elements/Avatar',
  component: Avatar
};

const Template = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: "https://picsum.photos/200",
  alt: "Jed Darrohn"
};

export const NoImage = Template.bind({});
NoImage.args = {
  firstName: "Frank",
  lastName: "Zappa",
};

export const NoName = Template.bind({});
NoName.args = {};