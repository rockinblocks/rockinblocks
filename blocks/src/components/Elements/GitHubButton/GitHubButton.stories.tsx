import React from "react";
import { Story, Meta } from "@storybook/react";
import { GitHubButton } from "./GitHubButton";

export default {
	title: "Elements/GitHubButton",
	component: GitHubButton
} as Meta;

const Template: Story = args => <GitHubButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
	exampleProp: "Rockin' Blocks!"
};
