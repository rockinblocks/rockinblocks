import React from "react";
import { shallow } from "enzyme";
import { CallToAction } from "./CallToAction";

describe("<CallToAction />", () => {
  it("should render", () => {
    const wrapper = shallow(
      <CallToAction
        heading="Rockin' Blocks!"
        content="## This is the hero content!"
        buttonText="Install Now"
        buttonLink="/docs/v0/installation"
      />
    );

    expect(wrapper.html()).toBeTruthy();
  });
});
