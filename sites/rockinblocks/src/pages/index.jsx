import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/mainLayout"
import { ContextProvider, SEO } from "../components/Utilities"
import { Blocks } from "../components/Builder"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ContextProvider>
      <Layout location={location} title={siteTitle}>
        <SEO title="A practical Yarn workspace powered Gatsby, Storybook, and Tina CMS for building a block library in React." />
        <Blocks />
      </Layout>
    </ContextProvider>
  )
}

export default BlogIndex

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
