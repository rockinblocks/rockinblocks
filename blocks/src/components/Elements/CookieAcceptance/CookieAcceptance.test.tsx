import React from "react";
import { shallow } from "enzyme";
import { CookieAcceptance } from "./CookieAcceptance";

describe("<CookieAcceptance />", () => {
  it("should render", () => {
    const wrapper = shallow(<CookieAcceptance />);

    expect(wrapper.html()).toBeTruthy();
  });
});
