import React from "react";
import { shallow, render } from "enzyme";
import { Button } from "../../Elements/Button";
import { Hero } from "./Hero";
import props from "./data";

describe("<Hero />", () => {
  it("should render the main heading", () => {
    const { heading } = props;
    const wrapper = shallow(<Hero {...props} />);
    expect(wrapper.find("p").first().text()).toEqual(heading);
  });

  it("should render the hero content", () => {
    const { content } = props;
    const wrapper = render(<Hero {...props} />);

    expect(wrapper.html()).toContain(content);
  });

  it("should render the button", () => {
    const { buttonText, buttonLink } = props;
    const wrapper = shallow(<Hero {...props} />);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).props()).toHaveProperty("text", buttonText);
    expect(wrapper.find(Button).props()).toHaveProperty("to", buttonLink);
  });
});
