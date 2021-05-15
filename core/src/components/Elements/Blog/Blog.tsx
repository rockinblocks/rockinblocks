import React from "react"
import { Navbar } from "../Navbar"
import styles from "./Blog.scss"

export const Blog = () => {
  const heroProps = {
    heading: "Rock out with your blocks out.",
    seoHeading:
      "The best documentation GatsbyJS starter created with Tina CMS.",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonLink: "/get-started",
    buttonText: "Start a Project",
  }

  return (
    <>
      <Navbar appName="Rockin' Docs!" />
      <h1 className={ styles.pageHeading }>Rockin' Blog </h1>
      <p>The Official Rockin' Blocks Blog</p>
    </>
  )
}
