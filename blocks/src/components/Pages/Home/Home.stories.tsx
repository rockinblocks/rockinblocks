import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Home } from './Home';

export default {
	title: 'Pages/Home',
	component: Home
} as Meta;

const Template: Story = args => <Home {...args}/>;

export const Default = Template.bind({});
Default.args = {};
