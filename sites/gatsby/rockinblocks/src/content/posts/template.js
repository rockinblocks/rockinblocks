import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { usePlugin } from "tinacms"
import { useRemarkForm } from "gatsby-tinacms-remark"
import Layout from "../../components/mainLayout"
import SEO from "../../components/Utilities/SEO"
import { Box, Container, Document } from "@rockinblocks/gatsby-plugin-rockinblocks"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const [markdownRemark, form] = useRemarkForm(data.markdownRemark)
  const { frontmatter, html, plainText } = markdownRemark
  const { title, date, description, keywords, imageBucket } = frontmatter

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

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <SEO title={title} description={description} />
      <Container column>
        <Box display="flex" justifyContent="center">
          <Box flex=".80">
            <Box display="flex" flexDirection="column">
              <Document frontmatter={frontmatter} html={html} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...TinaRemark
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        image
        imageBucket
        title
        description
        keywords
      }
      plainText
    }
  }
`
