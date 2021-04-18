/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createPages: createBlogs } = require("./src/blog/config")
const { createPages: createDocuments } = require("./src/docs/config")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const blogs = await createBlogs({ actions, graphql, reporter })
  await createDocuments({ actions, graphql, reporter })
}
