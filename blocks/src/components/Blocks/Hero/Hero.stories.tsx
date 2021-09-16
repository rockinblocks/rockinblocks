import React from "react";
import { Story, Meta } from "@storybook/react";
import { Hero, IHeroProps } from "./Hero";

export default {
  title: "Blocks/Hero",
  component: Hero,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IHeroProps> = args => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Create + Maintain",
  content:
    "# Craft an elegant component library and fully-customizable page builder that align perfectly with your design system.\n\n**Rockin' Blocks** is a fully-equipped application starter powered by Gatsby, Storybook, and TinaCMS. Create your application alongside your documentation and blog in a single repository. Easily share a your new component library across multiple Javascript applications. Take advantage of blazing-fast page speeds and version content edits.",
  buttonText: "Start a Project",
  buttonLink: "/docs/v0.1.0/introduction",
};
