import React, { useCallback, useEffect, useState } from "react"
import Helmet from "react-helmet"
import { useRemarkForm } from "gatsby-tinacms-remark"
import { usePlugin } from "tinacms"
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
  const { markdownRemark: propsMarkdownRemark, allMarkdownRemark } = data;
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
    },
    [documents]
  )

  const formOptions = {
    label: 'Edit Document',
    fields: [
      {
        label: 'Title',
        name: 'rawFrontmatter.title',
        description: 'Enter the title of the document here',
        component: 'text',
      },
      {
        label: 'Date Created',
        name: 'rawFrontmatter.date_created',
        description: 'Date document was created',
        component: 'text',
      },
      {
        label: 'Date Updated',
        name: 'rawFrontmatter.date_updated',
        description: 'Date document was last updated',
        component: 'text',
      },
      {
        label: 'Keywords',
        name: 'rawFrontmatter.keywords',
        description: 'A comma-spaced list of keywords for SEO',
        component: 'text',
      },
      {
        label: 'Description',
        name: 'rawFrontmatter.description',
        description: 'Description of document for SEO',
        component: 'textarea',
      },
      {
        label: 'Path',
        name: 'rawFrontmatter.path',
        description: 'The URL path for this document, e.g. /docs/v0/introduction',
        component: 'text',
      },
      {
        label: 'Order',
        name: 'rawFrontmatter.order',
        description: 'The order of the document in the sidebar menu',
        component: 'text',
      },
      {
        label: 'Markdown',
        name: 'rawMarkdownBody',
        description: 'The body of the document with Markdown support',
        component: 'markdown',
      },
    ],
  }

  const [markdownRemark, form] = useRemarkForm(propsMarkdownRemark, formOptions)

  const { frontmatter, html, plainText } = markdownRemark
  const { title, date, description, keywords, type } = frontmatter

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
    image: "https://oblong-objects-media.s3-us-west-2.amazonaws.com/oblong-logo-160x160.png",
  }

  // 3. Register the form as a plugin
  usePlugin(form)

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
            <Document
              frontmatter={frontmatter}
              html={html} 
              type={type} 
            />
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
      ...TinaRemark
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