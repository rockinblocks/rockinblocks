import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/mainLayout"
import { SEO } from "../../components/Utilities/SEO"
import {
  Container,
  Footer,
  Posts,
  Row
} from "@rockinblocks/gatsby-plugin-rockinblocks"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="A practical Yarn workspace powered Gatsby, Storybook, and Tina CMS for building a block library in React." />
      <Container>
        <Row>
          <h1>Rockin' Blog</h1>
        </Row>
        <Row>
          {posts && <Posts posts={posts} />}
        </Row>
      </Container>
      <Footer />
    </Layout>
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
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`
