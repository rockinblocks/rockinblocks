import React from "react"
import { Story, Meta } from "@storybook/react"
import { Content, IContentProps } from "./Content"

export default {
  title: "Blocks/Content",
  component: Content,
} as Meta

const Template: Story<IContentProps> = args => <Content {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: "Meet the Band",
  subheading:
    "Gatsby, Storybook, and Tina CMS come together for the first time to bring you an elegant, efficient, and practical development experience.",
  sections: [
    {
      heading: "Sed ut perspiciatis",
      body:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
    {
      heading: "Lorem ipsum dolor",
      body:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
    {
      heading: "Nemo enim ipsam",
      body:
        "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
    {
      heading: "Tempor incididunt",
      body:
        "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
  ],
}
