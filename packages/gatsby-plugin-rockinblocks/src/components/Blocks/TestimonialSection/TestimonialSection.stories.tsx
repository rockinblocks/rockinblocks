import React from "react"
import { Story, Meta } from "@storybook/react"
import { TestimonialSection, TestimonialSectionProps } from "./TestimonialSection"

export default {
  title: "Blocks/TestimonialSection",
  component: TestimonialSection,
} as Meta

const Template: Story<TestimonialSectionProps> = args => <TestimonialSection {...args} />

export const Default = Template.bind({})
Default.args = {
  exampleProp: "Rockin' Blocks!",
}
