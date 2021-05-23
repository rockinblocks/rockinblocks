import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header } from './Header';

export default {
	title: 'Elements/Header',
	component: Header
} as Meta;

const Template: Story = (args): JSX.Element => <Header {...args}/>;

export const Default = Template.bind({});
Default.args = {};
