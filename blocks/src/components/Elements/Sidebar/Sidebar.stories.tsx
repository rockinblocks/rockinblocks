import React from "react";
import { Story, Meta } from "@storybook/react";
import { Sidebar, ISidebarProps } from "./Sidebar";

export default {
  title: "Layout/Sidebar",
  component: Sidebar,
} as Meta;

const Template: Story<ISidebarProps> = args => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    {
      title: "Using the monorepo",
      path: "docs/v0.1.0/monorepo",
      order: "1.0",
    },
  ],
};
