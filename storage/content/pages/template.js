import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/mainLayout"
import {
  Box,
  Col,
  Container,
  Footer,
  Row,
} from "@rockinblocks/gatsby-plugin-rockinblocks"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // const { frontmatter, html, plainText } = data.json

  // const articleSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   articleBody: plainText,
  //   author: {
  //     "@type": "Person",
  //     name: "Jed Darrohn",
  //   },
  //   headline: title,
  //   datePublished: date,
  //   dateModified: date,
  //   mainEntityOfPage: "https://www.rockinblocks.io",
  //   publisher: {
  //     "@context": "http://schema.org",
  //     "@type": "Organization",
  //     name: "Rockin' Blocks",
  //     url: "https://www.rockinblocks.io",
  //     logo: {
  //       "@type": "ImageObject",
  //       url:
  //         "https://oblong-objects-media.s3-us-west-2.amazonaws.com/oblong-logo-160x160.png",
  //     },
  //   },
  //   keywords: keywords,
  //   image: "https://oblong-objects-media.s3-us-west-2.amazonaws.com/oblong-logo-160x160.png",
  // }

  return (
    <Layout>
      {/* <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet> */}
      {/* <SEO title={title} description={description} /> */}
      <Container column>
        <Row display="flex">
          <Col flex=".80">
            <Box display="flex" flexDirection="column">
              {/* <Document frontmatter={frontmatter} html={html} type={type} /> */}
            </Box>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        image
        title
        description
        keywords
      }
      plainText
    }
  }
`
