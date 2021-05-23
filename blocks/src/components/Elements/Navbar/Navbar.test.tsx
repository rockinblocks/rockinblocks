import React from "react";
import { shallow } from "enzyme";
import { Link } from "gatsby";
import { ReactComponent as Logo } from "../../../assets/rockinblocks-logo.svg";
import { ReactComponent as IconGitHub } from "../../../assets/icon-github.svg";
import { Badge } from "../Badge";
import { Navbar } from "./Navbar";
import props from "./data";

describe("<Navbar />", () => {
  const wrapper = shallow(<Navbar {...props} />);
  it("logo should link to the home page", () => {
    expect(wrapper.find(Link).find({ to: "/" }).find(Logo)).toHaveLength(1);
    expect(wrapper.find(Link).first().prop("to")).toEqual("/");
  });

  it("should render the Get Started link", () => {
    expect(wrapper.find({ to: "/docs/v0.1.0/introduction" })).toHaveLength(1);
    expect(wrapper.find({ to: "/docs/v0.1.0/introduction" }).text()).toEqual(
      "Docs"
    );
  });

  it("should render the GitHub icon", () => {
    expect(wrapper.find(IconGitHub)).toHaveLength(1);
    expect(wrapper.find('[data-rb="navbar-github-anchor"]')).toHaveLength(1);
    expect(
      wrapper.find('[data-rb="navbar-github-anchor"]').prop("href")
    ).toEqual("http://github.com/rockinblocks/rockindocs");
  });

  it("should render the current version", () => {
    expect(wrapper.find(Badge).html()).toContain("v0.1.0-alpha");
  });
});
