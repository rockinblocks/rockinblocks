import React from "react";
import { Story, Meta } from "@storybook/react";
import { CookieAcceptance } from "./CookieAcceptance";

export default {
	title: "Elements/CookieAcceptance",
	component: CookieAcceptance
} as Meta;

const Template: Story = args => <CookieAcceptance {...args}/>;

export const Default = Template.bind({});
Default.args = {};
