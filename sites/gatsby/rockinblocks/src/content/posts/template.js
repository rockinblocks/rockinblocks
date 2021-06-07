import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import {
  useRemarkForm,
  RemarkCreatorPlugin,
  DeleteAction,
} from "gatsby-tinacms-remark"
import { usePlugin, withPlugin } from "tinacms"
import slugify from "@sindresorhus/slugify"
import Layout from "../../components/mainLayout"
import { SEO } from "../../components/Utilities/SEO"
import {
  Box,
  Col,
  Container,
  Document,
  Footer,
  Row,
} from "@rockinblocks/gatsby-plugin-rockinblocks"

const Template = ({ data }) => {
  const { markdownRemark: propsMarkdownRemark } = data

  const formOptions = {
    label: "Edit Post",
    actions: [DeleteAction],
    fields: [
      {
        label: "Title",
        name: "rawFrontmatter.title",
        description: "Enter the title of the document here",
        component: "text",
      },
      {
        label: "Date",
        name: "rawFrontmatter.date",
        description: "Date post was created",
        component: "text",
      },
      {
        label: "Keywords",
        name: "rawFrontmatter.keywords",
        description: "A comma-spaced list of keywords for SEO",
        component: "text",
      },
      {
        label: "Description",
        name: "rawFrontmatter.description",
        description: "Description of document for SEO",
        component: "textarea",
      },
      {
        label: "Path",
        name: "rawFrontmatter.path",
        description:
          "The URL path for this document, e.g. /docs/v0/introduction",
        component: "text",
      },
      {
        label: "Markdown",
        name: "rawMarkdownBody",
        description: "The body of the document with Markdown support",
        component: "markdown",
      },
    ],
  }

  // Create stateful data connected to the Tina form
  const [markdownRemark, form] = useRemarkForm(propsMarkdownRemark, formOptions)

  const { frontmatter, plainText, html } = markdownRemark
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
    image:
      "https://oblong-objects-media.s3-us-west-2.amazonaws.com/oblong-logo-160x160.png",
  }

  // Register Tina form
  usePlugin(form)

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <SEO title={title} description={description} />
      <Container column>
        <Row display="flex">
          <Col flex=".80">
            <Box display="flex" flexDirection="column">
              <Document frontmatter={frontmatter} html={html} type={type} />
            </Box>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}

const CreatePostPlugin = new RemarkCreatorPlugin({
  label: "Create Post",
  fields: [
    {
      name: "title",
      component: "text",
      label: "Title",
      placeholder: "Rockin' Blocks: Gatsby, Storybook, and TinaCMS",
      description: "The title of the post.",
    },
  ],
  filename: form => `src/content/posts/${slugify(form.title)}.md`,
  frontmatter: form => ({
    title: `${form.title}`,
    path: `/blog/${slugify(form.title)}`,
    image: `https://placehold.it/960x640`,
    date: new Date().toISOString(),
    description: `A wonderful post.`,
    keywords:
      "gatsby, tinacms, storybook, yarn workspace, rockinblocks, rockin blocks",
    type: "post",
  }),
  body: form => `
## 🎶 If we could just hold hands 🎶
\`\`\`
Traversed the planet, when heaven sent me
I saw the kings who rule them all
Still by the firelight and purple moonlight I hear the rested rivers call
And the wind is crying, from a love that won't grow cold
My lover, she is lying, on the dark side of the globe
\`\`\`

🎸 <a href="https://open.spotify.com/track/4r8AQvzullpWTDpgv70KxD?si=f3108564c6684eab" target="_blank" ref="noreferrer notarget">"The Rover" by Led Zeppelin</a>
`,
})

export default withPlugin(Template, CreatePostPlugin);

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...TinaRemark
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
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
