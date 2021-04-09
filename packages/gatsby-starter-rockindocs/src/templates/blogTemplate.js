import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { usePlugin, useForm, useModalContainer } from 'tinacms'
import { useRemarkForm } from 'gatsby-tinacms-remark'
import Layout from '../components/layout'
import SEO from '@components/Utilities/SEO'
import Container from '@components/Layout/Container/Container'
import RecentPosts from '@components/Elements/RecentPosts/RecentPosts'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const [markdownRemark, form] = useRemarkForm(data.markdownRemark)
  const { frontmatter, html, plainText } = markdownRemark
  const { title, date, description, keywords, imageBucket } = frontmatter

  // Register Tina form
  usePlugin(form)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    articleBody: plainText,
    author: {
      '@type': 'Person',
      name: 'Jed Darrohn',
    },
    headline: title,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: 'https://www.oblongobjects.com',
    publisher: {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      name: 'Oblong Objects',
      url: 'https://www.oblongobjects.com',
      logo: {
        '@type': 'ImageObject',
        url:
          'https://oblong-objects-media.s3-us-west-2.amazonaws.com/oblong-logo-160x160.png',
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
        <h1 className="post-title">{title}</h1>
        <p>{date}</p>
        <div className="post-image-wrapper">
          <img style={{ maxWidth: '100%' }} src={imageBucket} />
        </div>
        <div
          style={{ flex: 1 }}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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