// 1. import `usePlugin` & `useJsonForm`
import React from "react"
import { usePlugin } from "tinacms"
import { useJsonForm } from "gatsby-tinacms-json"
import { graphql } from "gatsby"
import { Hero, HeroBlock } from "@rockinblocks/gatsby-plugin-rockinblocks"

export default function Page(props) {
  const [data, form] = useJsonForm(props.data.pagesJson, {
    fields: [
      {
        label: "Page Sections",
        name: "rawJson.blocks",
        component: "blocks",
        templates: {
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
            subheading={data.hero__subheading}
          />
        )
      default:
        break;
    }
    return <h2>Block</h2>
  }

  return (
    <section>
      <div>
        {blocks.map(block => (
          <Block key={block.__template} {...block} />
        ))}
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    pagesJson(path: { eq: $path }) {
      id
      path
      blocks {
        hero__heading
        hero__subheading
      }
      rawJson
      fileRelativePath
    }
  }
`
