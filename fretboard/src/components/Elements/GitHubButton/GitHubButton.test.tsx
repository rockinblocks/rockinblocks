import React from "react";
import { shallow } from "enzyme";
import { GitHubButton } from "./GitHubButton";

describe("<GitHubButton />", () => {
  it("should render", () => {
    const wrapper = shallow(<GitHubButton />);

    expect(wrapper.find("a").props().href).toEqual(
      "https://github.com/rockinblocks/rockinblocks"
    );
  });
});
