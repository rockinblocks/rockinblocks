import React from "react"
import { Story, Meta } from "@storybook/react"
import { Document } from "./Document"

export default {
  title: "Elements/Document",
  component: Document,
} as Meta

const Template: Story = args => <Document {...args} />

export const Default = Template.bind({})
Default.args = {
  documents: [
    {
      path: "/docs/installation",
      title: "Installation",
    },
    {
      path: "/docs/get-started",
      title: "Get Started",
    },
    {
      path: "/docs/blocks",
      title: "Get Started",
    },
  ],
}
