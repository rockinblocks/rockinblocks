import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/mainLayout"
import { ContextProvider, SEO } from "../components/Utilities"
import { Content, Footer, Hero } from "@rockinblocks/gatsby-plugin-rockinblocks"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const content = {
    heading: "Meet the Band",
    subheading:
      "Gatsby, Storybook, and Tina CMS come together for the first time to bring you an elegant, efficient, and practical development experience.",
    sections: [
      {
        heading: "Sed ut perspiciatis",
        body:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
        buttonText: "Learn More",
        buttonLink: "Lorem Ipsum",
      },
      {
        heading: "Lorem ipsum dolor",
        body:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        buttonText: "Learn More",
        buttonLink: "Lorem Ipsum",
      },
      {
        heading: "Nemo enim ipsam",
        body:
          "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
        buttonText: "Learn More",
        buttonLink: "Lorem Ipsum",
      },
      {
        heading: "Tempor incididunt",
        body:
          "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
        buttonText: "Learn More",
        buttonLink: "Lorem Ipsum",
      },
    ],
  }

  return (
    <ContextProvider>
      <Layout location={location} title={siteTitle}>
        <SEO title="A practical Yarn workspace powered Gatsby, Storybook, and Tina CMS for building a block library in React." />
        <Hero
          heading="Rock out with your blocks out."
          subheading="Save dozens of hours starting with Rockin' Blocks as your Gatsby starter theme. Craft an elegant block library in React immediately without wasting time with configuration. When it comes to performance, Rockin' Blocks can really shred: with caching, page loads are often less than a second."
          buttonText="Start a Project"
          buttonLink="/docs/v0/introduction"
        />
        <Content {...content} />
        <Footer />
      </Layout>
    </ContextProvider>
  )
}

export default Home

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
