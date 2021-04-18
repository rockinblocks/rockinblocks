import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import { Hero, HeroProps } from "./Hero"

describe("<Hero />", () => {
  it("should render", () => {
    const props: HeroProps = {
      seoHeading: "Gatsby starter",
      heading: "Rock out with your blocks out!",
      subheading: "Rockin' Blocks can shred!",
      buttonText: "Start a project",
    }
    const wrapper: ShallowWrapper = shallow(<Hero {...props} />)
    expect(wrapper).toBeDefined()
  })
})
