import React from "react";
import { shallow } from "enzyme";
import { Loading } from "./Loading";

describe("<Loading />", () => {
  it("should render", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.html()).toBeTruthy();
    expect(wrapper.find("p").text()).toContain(
      "This ain't no party! This ain't no disco!"
    );
  });
});
