import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Content, ContentProps } from './Content';

export default {
  title: 'Blocks/Content',
  component: Content,
} as Meta;

const Template: Story<ContentProps> = (args) => <Content {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Meet the band: Gatsby, Storybook, and Tina CMS.',
};
