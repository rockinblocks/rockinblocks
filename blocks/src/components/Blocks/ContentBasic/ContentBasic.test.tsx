import React from "react";
import { shallow } from "enzyme";
import { ContentBasic } from "./ContentBasic";

describe("<ContentBasic />", () => {
  it("should render", () => {
    const wrapper = shallow(<ContentBasic content="Rockin' Blocks!" />);

    expect(wrapper.html()).toBeTruthy();
  });
});
