const path = require("path")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Setup page files
  const pageTemplate = path.resolve(`src/templates/page.js`)
  const pages = await graphql(`
    query CreatePagesQuery {
      allPagesJson {
        edges {
          node {
            path
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
      }
    }
  `)

  // Handle errors
  if (pages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on pages.`)
    return
  }

  // Build out pages
  pages.data.allPagesJson.edges.forEach(({ node }) => {
    const { path } = node
    createPage({
      path: path,
      component: pageTemplate,
      context: {
        blocks: node.blocks._template
      },
    })
  })
}
