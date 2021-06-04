import React, { useCallback, useEffect, useState } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/mainLayout"
import { SEO } from "../../components/Utilities/SEO"
import {
  Box,
  Col,
  Container,
  Document,
  Footer,
  Row,
  Sidebar,
} from "@rockinblocks/gatsby-plugin-rockinblocks"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, html, plainText } = data.markdownRemark
  const { title, date, description, keywords, type } = frontmatter
  const { edges: documents } = data.allMarkdownRemark
  const [menuItems, setMenuItems] = useState([])

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
          "https://rockinblocks.s3-us-west-2.amazonaws.com/media/favicon.png",
      },
    },
    keywords: keywords,
    image: "https://rockinblocks.s3-us-west-2.amazonaws.com/media/favicon.png",
  }

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
    },
    [documents]
  )

  useEffect(() => {
    const items = []
    documents.forEach(document => {
      const { frontmatter } = document.node
      items.push(frontmatter)
    })

    sortAndSetItems(items)
  }, [documents, setMenuItems])

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <SEO
        title={`${title} | Rockin' Blocks | A Yarn workspace for React, powered by Gatsby`}
        description={description}
      />
      <Container>
        <Row>
          <Col display="flex" flex={20}>
            <Sidebar menuItems={menuItems} />
          </Col>
          <Col flex={80}>
            <Document frontmatter={frontmatter} html={html} type={type} />
          </Col>
        </Row>
      </Container>
      <Box>
        <Footer />
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
            order
            type
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date_created(formatString: "MMMM DD, YYYY")
        date_updated(formatString: "MMMM DD, YYYY")
        path
        title
        description
        keywords
        type
      }
      plainText
    }
  }
`
