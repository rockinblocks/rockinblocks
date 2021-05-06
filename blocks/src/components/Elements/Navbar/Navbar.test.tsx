import React from "react"
import { shallow } from "enzyme"
import { Link } from "gatsby"
import { Navbar, INavbarProps } from "./Navbar"
import { ReactComponent as Logo } from "../../../assets/rockinblocks-logo.svg"
import { ReactComponent as IconGitHub } from "../../../assets/icon-github.svg"
import props from "./data"

describe("<Navbar />", () => {
  const wrapper = shallow(<Navbar {...props} />)
  it("logo should link to the home page", () => {
    expect(wrapper.find(Link).find({ to: "/" }).find(Logo)).toHaveLength(1)
    expect(wrapper.find(Link).first().prop("to")).toEqual("/")
  })

  it("should render the Get Started link", () => {
    expect(wrapper.find({ to: "/docs" })).toHaveLength(1)
    expect(wrapper.find({ to: "/docs" }).text()).toEqual("Docs")
  })

  it("should render the GitHub icon", () => {
    expect(wrapper.find(IconGitHub)).toHaveLength(1)
    expect(wrapper.find('[data-rb="navbar-github-anchor"]')).toHaveLength(1)
    expect(
      wrapper.find('[data-rb="navbar-github-anchor"]').prop("href")
    ).toEqual("http://github.com/rockinblocks/rockindocs")
  })
})
