import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Hero, HeroProps } from './Hero';

export default {
  title: 'Example/Hero',
  component: Hero,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'The cheese stands alone.',
  subheading: 'Hi, ho, the derry-o. The cheese stands alone.',
};
