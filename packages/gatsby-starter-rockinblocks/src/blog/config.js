/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require(`path`)

 exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions
   const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
   const posts = await graphql(`
     {
       allMarkdownRemark(
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
   if (posts.errors) {
     reporter.panicOnBuild(`Error while running GraphQL query.`)
     return
   }

   posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
     createPage({
       path: node.frontmatter.path,
       component: blogPostTemplate,
       context: {}, // additional data can be passed via context
     })
   })
 }
