import React from "react";
import { shallow } from "enzyme";
import { Link } from "gatsby";
import { ReactComponent as Logo } from "../../../assets/rockinblocks-logo.svg";
import { Navbar } from "./Navbar";
import props from "./data";

describe("<Navbar />", () => {
  const wrapper = shallow(<Navbar {...props} />);
  it("logo should link to the home page", () => {
    expect(wrapper.find(Link).find({ to: "/" }).find(Logo)).toHaveLength(1);
    expect(wrapper.find(Link).first().prop("to")).toEqual("/");
  });

  it("should render the Docs link", () => {
    expect(wrapper.find({ to: "/docs/v0/introduction" })).toHaveLength(1);
    expect(wrapper.find({ to: "/docs/v0/introduction" }).text()).toEqual(
      "Docs"
    );
  });
});
