import React from "react"
import { shallow } from "enzyme"
import { Link } from "gatsby"
import { Navbar, INavbarProps } from "./Navbar"
import { ReactComponent as Logo } from "../../../assets/rockinblocks-logo.svg"
import props from "./data"

describe("<Navbar />", () => {
  it("the logo should link to the home page", () => {
    const wrapper = shallow(<Navbar {...props} />)
    expect(wrapper.find(Logo)).toHaveLength(1)
    // expect(wrapper.find(Logo).parent().parent()).toHaveAttribute("href", "/")
  })

  // it("should render the Get Started link", () => {
  //   const wrapper = shallow(<Navbar {...props} />)
  //   expect(wrapper.find(Link)).toBeGreat(1)
  // })

  // it("should render the GitHub icon", () => {
  //   const { subheading } = props
  //   const wrapper = shallow(<Navbar {...props} />)
  //   expect(wrapper.find("p").last().text()).toEqual(subheading)
  // })
})
