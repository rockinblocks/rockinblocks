import React from "react"
import { Story, Meta } from "@storybook/react"
import { CallToAction, ICallToActionProps } from "./CallToAction"

export default {
  title: "Blocks/CallToAction",
  component: CallToAction,
} as Meta

const Template: Story<ICallToActionProps> = args => <CallToAction {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: "Build Your Brand.",
  content: "## Craft a fully-customizable page builder from your design system.",
  button: {
    text: "Get Started",
    to: "/docs/v0/installation"
  }
}
