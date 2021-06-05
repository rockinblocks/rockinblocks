import React from "react";
import { Story, Meta } from "@storybook/react";
import { Navbar, INavbarProps } from "./Navbar";

export default {
  title: "Elements/Navbar",
  component: Navbar,
} as Meta;

const Template: Story<INavbarProps> = (args): JSX.Element => (
  <Navbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  appName: "Rockin' Docs!",
};
