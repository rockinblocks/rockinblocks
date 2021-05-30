import React from "react";
import { shallow } from "enzyme";
import { GitHubButton } from "./GitHubButton";

describe("<GitHubButton />", () => {
  it("should render", () => {
    const wrapper = shallow(<GitHubButton />);

    expect(wrapper.html()).toBeTruthy();
  });
});
