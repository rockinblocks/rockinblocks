import React from "react";
import { shallow } from "enzyme";
import { Post } from "./Post";

const props = {
  title: "Welcome to Rockin' Blocks!",
  path: "/blog/welcome-to-rockin-blocks",
  date: "05/23/2021",
};

describe("<Post />", () => {
  it("should render", () => {
    const wrapper = shallow(<Post {...props} />);

    expect(wrapper.html()).toBeTruthy();
  });
});
