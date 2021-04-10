/**
 * Essentially extending the gatsby-node.js from Gatsby
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require(`path`)

 exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions
   const documentTemplate = path.resolve(`src/docs/template.js`)
   const result = await graphql(`
     {
       allMarkdownRemark(
         filter: {frontmatter: {type: {eq: "document"}}}
         sort: { order: DESC, fields: [frontmatter___date] }
         limit: 1000
       ) {
         edges {
           node {
             frontmatter {
               path
             }
           }
         }
       }
     }
   `)

   // Handle errors
   if (result.errors) {
     reporter.panicOnBuild(`Error while running GraphQL query on document pages.`)
     return
   }

   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
     createPage({
       path: node.frontmatter.path,
       component: documentTemplate,
       context: {}, // additional data can be passed via context
     })
   })
 }
