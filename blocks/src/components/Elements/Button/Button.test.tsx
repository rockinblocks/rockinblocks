import React from "react"
import { shallow } from "enzyme"
import { Button } from "./Button"

describe("<Button />", () => {
  const props = {
    text: "Let's Get Started",
  }
  it("should render", () => {
    const wrapper = shallow(<Button {...props} />)

    expect(wrapper).toBeDefined()
  })
})
