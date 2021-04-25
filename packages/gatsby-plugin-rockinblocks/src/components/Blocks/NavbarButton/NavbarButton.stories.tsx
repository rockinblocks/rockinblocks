import React from "react"
import { Story, Meta } from "@storybook/react"
import { NavbarButton, NavbarButtonProps } from "./NavbarButton"

export default {
  title: "Blocks/NavbarButton",
  component: NavbarButton,
} as Meta

const Template: Story<NavbarButtonProps> = args => <NavbarButton {...args} />

export const Default = Template.bind({})
Default.args = {
  exampleProp: "Rockin' Blocks!",
}
