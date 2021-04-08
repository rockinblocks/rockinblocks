import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Hero, HeroProps } from './Hero';

export default {
  title: 'Blocks/Hero',
  component: Hero,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Rock out with your docs out.',
  seoHeading: 'The best documentation GatsbyJS starter created with Tina CMS.',
  subheading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
