// 1. import `usePlugin` & `useJsonForm`
import React from "react"
import { usePlugin } from "tinacms"
import { useJsonForm } from "gatsby-tinacms-json"
import { graphql } from "gatsby"
import Layout from "../../components/mainLayout"
// import { SEO } from "../../components/Utilities/SEO"

import Helmet from "react-helmet"
import {
  Box,
  Footer,
  Hero,
  HeroBlock,
  ContentBasic,
  ContentBasicBlock,
  CallToAction,
  CallToActionBlock,
} from "@rockinblocks/gatsby-plugin-rockinblocks"

export default function Page(props) {
  const [data, form] = useJsonForm(props.data.pagesJson, {
    fields: [
      {
        label: "Page Sections",
        name: "rawJson.blocks",
        component: "blocks",
        templates: {
          "cta-block": CallToActionBlock,
          "content-basic-block": ContentBasicBlock,
          "hero-block": HeroBlock,
        },
      },
    ],
  })

  usePlugin(form)

  const parsed = JSON.parse(data.rawJson)
  const { blocks } = parsed

  const Block = data => {
    const { _template } = data
    switch (_template) {
      case "hero-block":
        return (
          <Hero
            heading={data.hero__heading}
            subheading={data.hero__content}
            buttonText={data.hero__buttonText}
            buttonLink={data.hero__buttonLink}
          />
        )
      case "content-basic-block":
        return <ContentBasic content={data.contentBasic__content} />
      case "cta-block":
        return (
          <CallToAction
            heading={data.cta__heading}
            content={data.cta__content}
            buttonText={data.cta__buttonText}
            buttonLink={data.cta__buttonLink ?? "/"}
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
      <Box>
        <Footer />
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    pagesJson(path: { eq: $path }) {
      id
      path
      blocks {
        cta__heading
        cta__content
        cta__buttonText
        cta__buttonLink
        hero__heading
        hero__content
        hero__buttonText
        hero__buttonLink
      }
      rawJson
      fileRelativePath
    }
  }
`
