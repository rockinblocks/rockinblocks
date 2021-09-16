import React from "react"
import { shallow } from "enzyme"
import { CallToAction } from "./CallToAction"

describe("<CallToAction />", () => {
  it("should render", () => {
    const wrapper = shallow(<CallToAction exampleProp="Rockin' Blocks!" />)

    expect(wrapper.html()).toBeTruthy()
  })
})
