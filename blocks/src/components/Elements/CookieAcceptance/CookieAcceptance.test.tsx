import React from "react";
import { shallow } from "enzyme";
import { Alert } from "../Alert";
import { CookieAcceptance } from "./CookieAcceptance";

describe("<CookieAcceptance />", () => {
  it("should render", () => {
    const wrapper = shallow(<CookieAcceptance />);

    expect(wrapper.find(Alert)).toBeTruthy();
  });
});
