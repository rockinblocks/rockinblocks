import React from "react"
import { Hero } from "../../Blocks/Hero"
import { Content } from "../../Blocks/Content"
import { Navbar } from "../../Elements/Navbar"

export const Home = () => {
  const heroProps = {
    heading: "Rock out with your blocks out.",
    seoHeading:
      "The best documentation GatsbyJS starter created with Tina CMS.",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonLink: "/get-started",
    buttonText: "Start a Project",
  }

  const sections = [
    {
      heading: "Sed ut perspiciatis",
      body:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
    {
      heading: "Lorem ipsum dolor",
      body:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
    {
      heading: "Nemo enim ipsam",
      body:
        "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
    {
      heading: "Tempor incididunt",
      body:
        "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
      buttonText: "Learn More",
      buttonLink: "Lorem Ipsum",
    },
  ]

  return (
    <>
      <Navbar appName="Rockin' Docs!" />
      <Hero {...heroProps} />
      <Content
        heading="Meet the band"
        subheading="Gatsby, Storybook, and Tina CMS come together for the first time to bring you an elegant, efficient, and practical development experience."
        sections={sections}
      />
    </>
  )
}
