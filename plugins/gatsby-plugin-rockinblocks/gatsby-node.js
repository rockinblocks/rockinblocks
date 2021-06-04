 const path = require("path")

 exports.createPages = async ({ actions, graphql, reporter }) => {
	 const { createPage } = actions
	 
	 const blogPostTemplate = path.resolve(`../../src/content/posts/template.js`)
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
 
	 // Create blog posts
	 posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
		 createPage({
			 path: node.frontmatter.path,
			 component: blogPostTemplate,
			 context: {}, // additional data can be passed via context
		 })
	 })
 
 
	 // Setup documentation files
	 const documentTemplate = path.resolve(`src/content/docs/template.js`)
	 const documents = await graphql(`
		 {
			 allMarkdownRemark(
				 filter: { frontmatter: { type: { eq: "document" } } }
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
	 if (documents.errors) {
		 reporter.panicOnBuild(
			 `Error while running GraphQL query on document pages.`
		 )
		 return
	 }
 
	 // Build out documentation
	 documents.data.allMarkdownRemark.edges.forEach(({ node }) => {
		 createPage({
			 path: node.frontmatter.path,
			 component: documentTemplate,
			 context: {}, // additional data can be passed via context
		 })
	 })
 }
 

