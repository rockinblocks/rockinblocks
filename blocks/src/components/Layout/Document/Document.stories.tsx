import React from "react";
import { Story, Meta } from "@storybook/react";
import { Document, IDocumentProps } from "./Document";
import DocumentData from "./data";

export default {
  title: "Layout/Document",
  component: Document,
} as Meta;

const Template: Story<IDocumentProps> = args => <Document {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...DocumentData,
};
