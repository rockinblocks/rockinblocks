import React from "react";
import { Story, Meta } from "@storybook/react";
import { Post, IPostProps } from "./Post";

export default {
	title: "Elements/Post",
	component: Post
} as Meta;

const Template: Story<IPostProps> = args => <Post {...args}/>;

export const Default = Template.bind({});
Default.args = {
	title: "Welcome to Rockin' Blocks!",
	path: "/blog/welcome-to-rockin-blocks",
	date: "05/23/2021"
};
