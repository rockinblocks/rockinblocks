import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/mainLayout"
import { ContextProvider, SEO } from "../components/Utilities"
import { Footer, Hero } from "@rockinblocks/gatsby-plugin-rockinblocks"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ContextProvider>
      <Layout location={location} title={siteTitle}>
        <SEO title="A practical Yarn workspace powered Gatsby, Storybook, and Tina CMS for building a block library in React." />
        <Hero
          heading="Rock out with your blocks out."
          seoHeading="An open-Gatsby workspace with documentation-driven development in mind, focused on improving startup success."
          subheading="Create your own block library in React. Rockin' Blocks is built with one of the fastest web frameworks, GatsbyJS, which means when it comes to performance, Rockin' Blocks can really shred."
          buttonText="Start a Project"
          buttonLink="/docs/v0/introduction"
        />
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
