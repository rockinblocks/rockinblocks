import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, IButtonProps } from "./Button";

export default {
  title: "Elements/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Start a Project",
};
