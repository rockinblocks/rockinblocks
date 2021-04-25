import React from "react"
import { shallow } from "enzyme"
import { NavbarButton } from "./NavbarButton"

describe("<NavbarButton />", () => {
  it("should render", () => {
    const wrapper = shallow(<NavbarButton exampleProp="Rockin' Blocks!" />)

    expect(true).toBeTruthy()
  })
})
