import React from "react";
import { Story, Meta } from "@storybook/react";
import { Alert, IAlertProps } from "./Alert";

const AlertStories = {
	title: "Elements/Alert",
	component: Alert
} as Meta;

const Template: Story<IAlertProps> = args => <Alert {...args}/>;

export const Default = Template.bind({});
Default.args = {
	text: "Rockin' Blocks may collect a small amount of data to help improve our online user experiences.",
	link: {
		text: "Approve",
		location: "#"
	}
};

export default AlertStories;
