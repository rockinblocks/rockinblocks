import React from "react";
import { Story, Meta } from "@storybook/react";
import { Loading } from "./Loading";

export default {
  title: "Blocks/Loading",
  component: Loading,
} as Meta;

const Template: Story = args => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {};
