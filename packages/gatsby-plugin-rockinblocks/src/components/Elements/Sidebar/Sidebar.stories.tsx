import React from "react"
import { Story, Meta } from "@storybook/react"
import { Sidebar, SidebarProps } from "./Sidebar"

export default {
  title: "Elements/Sidebar",
  component: Sidebar,
} as Meta

const Template: Story<SidebarProps> = args => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  appName: `Rockin' Docs!`,
}
