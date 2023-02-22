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
                buttonLink1
                buttonText1
                buttonLink2
                buttonText2
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

    // Setup documentation files
    // const documentTemplate = path.resolve(`src/templates/document.js`)
    // const documents = await graphql(`
    //   {
    //     allMarkdownRemark(
    //       filter: { frontmatter: { type: { eq: "document" } } }
    //       sort: {frontmatter: {title: DESC}}
    //       limit: 1000
    //     ) {
    //       edges {
    //         node {
    //           frontmatter {
    //             path
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
  
    // // Handle errors
    // if (documents.errors) {
    //   reporter.panicOnBuild(
    //     `Error while running GraphQL query on document pages.`
    //   )
    //   return
    // }
  
    // // Build out documentation
    // documents.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //   createPage({
    //     path: node.frontmatter.path,
    //     component: documentTemplate,
    //     context: {}, // additional data can be passed via context
    //   })
    // })
}
