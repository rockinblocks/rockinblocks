import React from "react";
import { Story, Meta } from "@storybook/react";
import { Posts, IPostsProps } from "./Posts";

export default {
  title: "Blocks/Posts",
  component: Posts,
} as Meta;

const Template: Story<IPostsProps> = args => <Posts {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: [
    {
      node: {
        frontmatter: {
          title: "Welcome to Rockin' Blocks!",
          path: "/blog/welcome-to-rockin-blocks",
          date: "05/23/2021",
        },
      },
    },
  ],
};
