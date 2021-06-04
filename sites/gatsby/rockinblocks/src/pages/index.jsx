import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/mainLayout"
import { ContextProvider, SEO } from "../components/Utilities"
import { Content, Footer, Hero } from "@rockinblocks/gatsby-plugin-rockinblocks"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const content = {
    heading: "Meet the Band",
    subheading:
      "Gatsby and Storybook come together for the first time to bring you an elegant, efficient, and practical development experience.",
    sections: [
      {
        heading: "Share your blocks across Gatsby apps",
        body:
          "Rockin' Blocks enables design systems to flourish with reusable block components across all of your applications.",
        buttonText: "Start Jamming",
        buttonLink: "/docs/v0/introduction",
      },
      {
        heading: "Gatsby & Storybook: Rock of Ages",
        body:
          "Gatsby and Storybook are two rockstars that are about to go on tour, and you're going with them! Pick up your axe and start shredding: start a Rockin' Blocks project today!",
        buttonText: "Pick Up Your Axe",
        buttonLink: "/docs/v0/introduction",
      },
      {
        heading: "Documentation-driven jam sessions",
        body:
          "Write your documentation hand-in-hand with your application. With Markdown support out of the box, including code highlighting with PrismJS and the Nord theme.",
        buttonText: "Craft Masterpiece",
        buttonLink: "/docs/v0/introduction",
      },
      {
        heading: "Join the Discord",
        body:
          "Interested in contributing? Want to share a great idea? Open source means open to new ideas and suggestions. Join the Discord!",
        buttonText: "Join the Band",
        buttonLink: "//discord.gg/vmFSbjuP25",
      },
    ],
  }

  return (
    <ContextProvider>
      <Layout location={location} title={siteTitle}>
        <SEO title="A practical Yarn workspace powered Gatsby and Storybook for crafting a reusable block library for your next big idea." />
        <Hero
          heading="Rock out with your blocks out."
          subheading="Save dozens of hours starting with Rockin' Blocks as your Gatsby starter theme. Craft an elegant block library in React immediately without wasting time with configuration. When it comes to performance, Rockin' Blocks can really shred: with caching, page loads are often less than a second."
          buttonText="Start a Project"
          buttonLink="/docs/v0/introduction"
        />
        <Content {...content} />
        <Footer />
      </Layout>
    </ContextProvider>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            image
          }
        }
      }
    }
  }
`
