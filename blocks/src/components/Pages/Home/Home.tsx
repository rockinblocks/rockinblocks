import React from "react";
import { Hero } from "../../Blocks/Hero";
import { Navbar } from "../../Elements/Navbar";

export const Home = () => {
  const heroProps = {
    heading: "Rock out with your blocks out.",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonLink: "/get-started",
    buttonText: "Start a Project",
  };

  return (
    <>
      <Navbar appName="Rockin' Docs!" />
      <Hero {...heroProps} />
    </>
  );
};
