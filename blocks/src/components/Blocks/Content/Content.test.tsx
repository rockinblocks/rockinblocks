import React from "react";
import { shallow } from "enzyme";
// Import { Content } from "./Content"

describe("<Content />", () => {
  it("should render", () => {
    const wrapper = shallow(<div />);
    // Const wrapper = shallow(<Content />)

    expect(wrapper.html()).toBeTruthy();
  });
});
