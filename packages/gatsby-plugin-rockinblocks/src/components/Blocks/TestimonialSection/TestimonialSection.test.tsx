import React from "react"
import { shallow } from "enzyme"
import { TestimonialSection } from "./TestimonialSection"

describe("<TestimonialSection />", () => {
  it("should render", () => {
    const wrapper = shallow(<TestimonialSection exampleProp="Rockin' Blocks!" />)

    expect(true).toBeTruthy()
  })
})
