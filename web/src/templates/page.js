import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import { Hero, CallToAction } from "@rockinblocks/rockinblocks"

const PageTemplate = ({ data }) => {

  const { pagesJson } = data;
  const { blocks } = pagesJson;

  const Block = data => {
    const { _template } = data
    switch (_template) {
      case "cta-1":
        return (
          <CallToAction
            heading={data.cta.heading}
            content={data.cta.content}
            buttonText={data.cta.buttonText}
            buttonLink={data.cta.buttonLink ?? "/"}
          />
        )
      case "hero-1":
        return (
          <Hero
            heading={data.hero.heading}
            content={data.hero.content}
            buttonText={data.hero.buttonText}
            buttonLink={data.hero.buttonLink}
          />
        )
      default:
        break
    }
    return <h2>Block</h2>
  }

  return (
    <Layout>
      <Helmet></Helmet>
      <main>
        <div>
          {blocks.map(block => (
            <Block key={block.__template} {...block} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query PageTemplateQuery($path: String) {
    pagesJson(path: { eq: $path }) {
      id
      blocks {
        _template
        cta {
          buttonLink
          buttonText
          content
          heading
        }
        hero {
          buttonLink
          buttonText
          content
          heading
        }
      }
    }
  }
`
export default PageTemplate