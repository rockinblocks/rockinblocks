---
title: GatsbyJS Setup with Sass and Markdown Support
path: /blog/gatsbyjs-setup-with-sass-and-markdown-support
image: post-1.png
imageBucket: 'https://oblong-objects-media.s3-us-west-2.amazonaws.com/post-1.png'
date: '2020-04-12'
description: >-
  Using Markdown with Gatsby and GraphQL makes the creation of new content a
  breeze.
keywords: 'markdown, gatsby, graphql'
---
## Trying something new should be easy. GatsbyJS just nails it.

This morning I became hell-bent on starting some sort of development project. The kicker, however, is that I not only wanted to start a new project today, I wanted to finish it today, as well. I really needed a new blog that allowed me to write more generally about web development, but I didn't want to use Medium or WordPress -- I really wanted to use Javascript, and I really wanted to host it myself. I kept hearing about the simplicity and ease-of-use of [GatsbyJS](https://www.gatsbyjs.org/) through some friends and colleagues, and decided to give it a shot.

***

### GatsbyJS Installation

<a href="https://www.gatsbyjs.com/docs/quick-start/" target="_blank">
Here is a link to Gatsby's Quick Start
</a>

#### Install the Gatsby CLI tool globally on your machine:

I recommend using the CLI tool that Gatsby provides to get a new site setup.

```bash
$ npm install -g gatsby-cli
```

#### Create a new Gatsby project:

```bash
$ gatsby new project-name
```

#### Start the app:

```bash
$ cd project-name && gatsby develop
```

Quick and painless. The team at GatsbyJS has also done a really great job with providing enough boilerplate so you can get started right away, but not so much that your application is immediately cluttered from the start.

***

### Adding Sass to GatsbyJS

There are a couple of things that I can't live without on almost any project, and [Sass](https://sass-lang.com) is one of them. Hooking up Sass was a cinch.

#### Installing packages

```bash
# With Yarn
$ yarn add node-sass gatsby-plugin-sass

# With NPM
$ npm i node-sass gatsby-plugin-sass --save-dev
```

#### Updating the configuration file

##### gatsby-config.js

```javascript
// Add the Sass plugin to the plugins array.
// There may already be some stuff here.

{
  ...

  plugins: [
      `gatsby-plugin-sass`
  ]
  ...
}
```

#### Adding some styles

I created a new `src/styles/main.scss` file that we can now import in Gatsby's `gatsby-browser.js` file to pull it in whenever our app starts in the browser.

##### main.scss

```scss
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
```

##### gatsby-browser.js

```javascript
import './src/styles/main.scss'
```

***

### Adding Markdown support to GatsbyJS

When I heard there was Markdown support for Gatsby, I knew I had to have it. This was going to create a super easy way for me to create new posts without ever having to leave my code editor (Farewell, WordPress!), and fortunately it was also a snap to add to the app.

These are the steps we will need to take in order to get this to work:

1. Install the necessary packages
2. Update our `gatsby-config.js` file to use the new plugins
3. Create a blog template to dynamically show each post's data
4. Add a Markdown file for a new blog post
5. Update our `gatsby-node.js` to create each of our pages from our Markdown files

#### Installing packages

```shell
# With Yarn

yarn add gatsby-source-filesystem gatsby-transformer-remark

# With NPM

npm install --save gatsby-source-filesystem gatsby-transformer-remark
```

#### Updating the configuration file

##### gatsby-config.js

```javascript
// Add the transformer remark plugin to the plugins array.

{
...

plugins: [
    `gatsby-transformer-remark`
]

...
}
```

#### Creating the blog page template

I created a file in a new `templates` directory called `blogTemplate.js`. This is basially the "wrapper" for every post. This post will have access to a `frontmatter` object that contains information that we will retrieve with GraphQL from a special header area within each Markdown file.

##### blogTemplate.js

```javascript
import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
```

#### Add a Markdown file for a new post

I added in a `post-1.md` file into a new `src/markdown-pages` directory I created. The `---` header encloses our data for this particular post that will be queryable by GraphQL.

##### post-1.md

```markdown
---
path: '/blog/painless-gatsbyjs-setup-and-deployment-with-aws-amplify'
date: '2020-04-12'
title: 'Painless GatsbyJS Setup and Deployment with AWS Amplify'
---

# This is the new blog post!

And here is some basic content.
```

#### Update `gatsby-node.js` to generate pages from our Markdown files

```javascript
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, frontmatter: [frontmatter___date] }
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
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
```