import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Layout, LayoutProps } from './Layout';

export default {
  title: 'Blocks/Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Meet the band: Gatsby, Storybook, and Tina CMS.',
};
