import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import RecentPosts from '@elements/RecentPosts/RecentPosts'
import SEO from '@utilities/SEO'
import ContextProvider from '@utilities/ContextProvider'
import { Blocks } from '../components/Builder'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ContextProvider>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Blocks />
        <RecentPosts />
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
