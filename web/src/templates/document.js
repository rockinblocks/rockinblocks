import React, { useCallback, useEffect, useState } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Document, Sidebar } from "@rockinblocks/rockinblocks"

const DocumentTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { allMarkdownRemark, markdownRemark } = data
  const { edges: documents } = allMarkdownRemark
  const [menuItems, setMenuItems] = useState([])

  const sortAndSetItems = useCallback(
    items => {
      items.sort((item, nextItem) => {
        const { order } = item
        const { order: nextOrder } = nextItem

        if (order < nextOrder) {
          return -1
        }

        return 1
      })

      setMenuItems(items)
    },[])


  const { frontmatter, html } = markdownRemark
  const { title, date, keywords, type } = frontmatter

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    author: {
      "@type": "Person",
      name: "Jed Darrohn",
    },
    headline: title,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: "https://www.rockinblocks.io",
    publisher: {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Rockin' Blocks",
      url: "https://www.rockinblocks.io",
      logo: {
        "@type": "ImageObject",
        url:
          "https://oblong-objects-media.s3-us-west-2.amazonaws.com/oblong-logo-160x160.png",
      },
    },
    keywords: keywords,
    image:
      "https://oblong-objects-media.s3-us-west-2.amazonaws.com/oblong-logo-160x160.png",
  }

  useEffect(() => {
    const items = []
    documents.forEach(document => {
      const { frontmatter } = document.node
      items.push(frontmatter)
    })

    sortAndSetItems(items)
  }, [documents, setMenuItems, sortAndSetItems])

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          { JSON.stringify(articleSchema) }
        </script>
      </Helmet>
      {/* <SEO
        title={`${title} | Rockin' Blocks | A Yarn workspace for React, powered by Gatsby`}
        description={description}
      /> */}
      <div className="container mx-auto">
        <div className="flex">
          <div display="flex-1">
            <Sidebar menuItems={menuItems} />
          </div>
          <div display="block" className="markdown flex-1 max-w-7xl">
            <Document frontmatter={frontmatter} html={html} type={type} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "document" } } }
      sort: {frontmatter: {title: DESC}}
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            order
            type
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        dateCreated(formatString: "MMMM DD, YYYY")
        dateUpdated(formatString: "MMMM DD, YYYY")
        path
        title
        description
        keywords
        type
      }
    }
  }
`

export default DocumentTemplate
