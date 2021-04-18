import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { usePlugin } from "tinacms"
import { useRemarkForm } from "gatsby-tinacms-remark"
import Layout from "../components/mainLayout"
import SEO from "../components/Utilities/SEO"
import {
  Box,
  Container,
  Sidebar,
} from "@rockinblocks/gatsby-plugin-rockinblocks"

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
      <Box display="flex">
        <Container column>
          <Sidebar />
          <Box>
            <h1 className="post-title">{title}</h1>
            <p>{date}</p>
            <div className="post-image-wrapper">
              <img style={{ maxWidth: "100%" }} src={imageBucket} />
            </div>
            <div
              style={{ flex: 1 }}
              className="blog-post-content"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
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
