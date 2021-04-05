import React from "react"
import { Hero } from "../../Blocks/Hero"
import { Content } from "../../Blocks/Content"
import { Navbar } from "../../Elements/Navbar"

export const Home = () => {
  const heroProps = {
    heading:
      "Rock out with your docs out.",
    seoHeading:
      "The best documentation GatsbyJS starter created with Tina CMS.",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }

  return (
    <>
      <Navbar appName="Rockin' Docs!" />
      <Hero {...heroProps} />
      <Content heading="Meet the band: GatsbyJS, Storybook, and Tina CMS." />
    </>
  )
}
