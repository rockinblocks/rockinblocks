import React from "react";
import { Story, Meta } from "@storybook/react";
import { Badge, IBadgeProps } from "./Badge";

export default {
  title: "Blocks/Badge",
  component: Badge,
} as Meta;

const Template: Story<IBadgeProps> = args => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Rock On!",
  textColor: "#ffffff",
  variant: "success",
};
