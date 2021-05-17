import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Blog } from './Blog';

export default {
	title: 'Pages/Blog',
	component: Blog
} as Meta;

const Template: Story = args => <Blog {...args} />;

export const Default = Template.bind({});
Default.args = {};
