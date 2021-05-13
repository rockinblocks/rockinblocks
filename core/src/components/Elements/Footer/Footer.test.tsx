import React from "react"
import { shallow } from "enzyme"
import { Footer } from "./Footer"

describe("<Footer />", () => {
  it("should render", () => {
    const wrapper = shallow(<Footer exampleProp="Rockin' Blocks!" />)

    expect(true).toBeTruthy()
  })
})
