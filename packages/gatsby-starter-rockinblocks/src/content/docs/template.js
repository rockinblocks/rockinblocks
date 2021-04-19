import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { usePlugin } from "tinacms"
import { useRemarkForm } from "gatsby-tinacms-remark"
import Layout from "../../components/mainLayout"
import SEO from "../../components/Utilities/SEO"
import {
  Box,
  Container,
  Document,
  Sidebar,
} from "@rockinblocks/gatsby-plugin-rockinblocks"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const [markdownRemark, form] = useRemarkForm(data.markdownRemark)
  const { frontmatter, html, plainText } = markdownRemark
  const { title, date, description, keywords, imageBucket } = frontmatter
  const { edges: documents } = data.allMarkdownRemark
  const [menuItems, setMenuItems] = useState([])

  // Register Tina form
  usePlugin(form)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    articleBody: plainText,
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
    image: imageBucket,
  }

  useEffect(() => {
    const items = []
    documents.forEach((document, index)=>{
      items.push(document.node.frontmatter)
    })
    setMenuItems(items)
  }, [documents])

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <SEO title={title} description={description} />
      <Box display="flex">
        <Container>
          <Box display="flex" flex={20}>
            <Sidebar menuItems={menuItems} />
          </Box>
          <Box flex={80}>
            <Document frontmatter={frontmatter} html={html} />
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "document" } } }
      sort: { order: DESC, fields: [frontmatter___title] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...TinaRemark
      html
      frontmatter {
        date_created(formatString: "MMMM DD, YYYY")
        date_updated(formatString: "MMMM DD, YYYY")
        path
        title
        description
        keywords
      }
      plainText
    }
  }
`
