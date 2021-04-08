import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { PostCard } from "../PostCard"

const RecentPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(limit: 3) {
          edges {
            node {
              id,
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                image
                imageBucket
                title
                description
                keywords
              }
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMarkdownRemark.edges
      posts.map((post) => {
        return (
          <PostCard
            key={post.node.id}
            title={post.node.frontmatter.title}
            path={post.node.frontmatter.path}
            image={post.node.frontmatter.image}
            date={post.node.frontmatter.date}
          />
        )
      })
    }}
  />
)

export default RecentPosts