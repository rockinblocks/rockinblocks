import React from "react"
import { shallow } from "enzyme"
import { Hero } from "./Hero"
import { Button } from "../../Elements/Button"
import props from "./data"

describe("<Hero />", () => {
  it("should render the SEO heading", () => {
    const { seoHeading } = props
    const wrapper = shallow(<Hero {...props} />)
    expect(wrapper.find("h1")).toHaveLength(1)
    expect(wrapper.find("h1").text()).toEqual(seoHeading)
  })

  it("should render the display heading", () => {
    const { heading } = props
    const wrapper = shallow(<Hero {...props} />)
    expect(wrapper.find("p").first().text()).toEqual(heading)
  })

  it("should render the subheading", () => {
    const { subheading } = props
    const wrapper = shallow(<Hero {...props} />)
    expect(wrapper.find("p").last().text()).toEqual(subheading)
  })

  it("should render the button", () => {
    const { buttonText, to } = props
    const wrapper = shallow(<Hero {...props} />)
    expect(wrapper.find(Button)).toHaveLength(1)
    expect(wrapper.find(Button).props()).toHaveProperty("text", buttonText)
    expect(wrapper.find(Button).props()).toHaveProperty("to", to)
  })
})