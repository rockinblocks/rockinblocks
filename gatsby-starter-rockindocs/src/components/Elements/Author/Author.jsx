import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "@layout/Container/Container"

export const Author = () => {
  const data = useStaticQuery(graphql`
    query {
      authorImage: file(relativePath: { eq: "Jed-2019.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container padded className="author">
      <div className="author__image-wrapper">
        <div className="author__image">
          <Img fluid={data.authorImage.childImageSharp.fluid} />
        </div>
      </div>
      <div className="author__bio">
        <h4 className="author__bio-header">About the Author</h4>
        <p>
          Jed Darrohn is a software developer that specializes in Laravel,
          Vue.js, and React. He lives in Denver, Colorado with his Australian
          Shepherd, Bessie.
        </p>
      </div>
    </Container>
  )
}

export default Author
