/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { withPlugin } from "tinacms"
import { RemarkCreatorPlugin } from "gatsby-tinacms-remark"
import {
  Loading,
  Navbar,
  Alert,
} from "@rockinblocks/gatsby-plugin-rockinblocks"

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar
            appName="Rockin' Blocks"
            color={"#ffffff"}
            backgroundColor="#ffffff"
          />
          <Alert
            text="Rockin' Blocks now ships with a fully-customizable page builder, powered by TinaCMS! 🦙"
            link={{
              text: "Install Now",
              location: "/docs/v0/installation",
            }}
          />
          <div className="layout-wrapper">
            <main>{children}</main>
          </div>
        </>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const CreatePostPlugin = new RemarkCreatorPlugin({
  label: "Create Document",
  fields: [
    {
      name: "title",
      component: "text",
      label: "Title",
      placeholder: `Developing with Rockin' Blocks`,
      description: "The name of the new markdown file.",
    },
    {
      name: "filename",
      component: "text",
      label: "Filename",
      placeholder: "example.md",
      description: "The name of the new markdown file.",
    },
    {
      name: "path",
      component: "text",
      label: "Path",
      placeholder: "/docs/v0/blocks",
      description: "The URL path for this document",
    },
    {
      name: "keywords",
      component: "text",
      label: "Keywords",
      placeholder: "gatsby, storybook, tinacms, page builder",
      description: "Comma-separated list of keywords. Used for SEO",
    },
    {
      name: "description",
      component: "text",
      label: "Description",
      placeholder: `Rockin' Blocks is a Yarn workspace powered by Gatsby, Storybook, and TinaCMS`,
      description: "A brief description of this document. Used for SEO.",
    },
    {
      name: "order",
      component: "text",
      label: "Order",
      placeholder: `e.g. 4.0, 4.1, 8.3`,
      description: "Logically order documentation items in the sidebar menu.",
    },
  ],
  filename: form => `${form.path}/${form.filename}/`,
  frontmatter: form => ({
    title: `Testing the Title`,
    date_created: `2021-06-05`,
    date_updated: `2021-06-05`,
    keywords:
      "gatsby, tinacms, storybook, yarn workspace, rockinblocks, rockin blocks",
    path: `${form.path}`,
    description: `A wonderful document.`,
    order: `10.0`,
    type: "document",
  }),
  body: form => `
## 🎸🎶 If we could just hold hands 🎶🎸
\`\`\`
Traversed the planet, when heaven sent me
I saw the kings who rule them all
Still by the firelight and purple moonlight I hear the rested rivers call
And the wind is crying, from a love that won't grow cold
My lover, she is lying, on the dark side of the globe
\`\`\`

["The Rover"](https://open.spotify.com/track/4r8AQvzullpWTDpgv70KxD?si=d884a36e141c4e7b) by [Led Zeppelin](https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp?si=0EMdNIFjTESZYOVkuqalZw)
`,
})

export default withPlugin(Layout, [CreatePostPlugin])
