---
title: Displaying Your Spotify Top Artists with Gatsby
path: /blog/displaying-your-spotify-top-artists-with-gatsbyjs
image: post-2.png
imageBucket: 'https://oblong-objects-media.s3-us-west-2.amazonaws.com/post-2.png'
date: '2020-04-13'
description: >-
  Showing my most recent Spotify artists in Gatsby using gatsby-source-spotify
  and gatsby-image with a working example.
keywords: 'spotify, gatsby, javascript, graphql, gatsby-soure-spotify'
---

## Show off a fancy list of our top Spotify artists without much hassle

I knew that Spotify had a really great API, but I had never had a chance to really tap into it to see what I could do. What could be a better project than creating a list of my recent jams? You can check out a working example using my Spotify account [here](/spotify).

---

### Package Installation

Fortunately, there is already a [Gatsby package](https://www.gatsbyjs.org/packages/gatsby-source-spotify/) created to make this a breeze. We are also going to pull in `gatsby-image` to display the artists' photographs.

```
# With Yarn
yarn add gatsby-source-spotify gatsby-image

# With NPM
npm i gatsby-source-spotify gatsby-image --save
```

---

### Create your Spotify app

You can create your Spotify app from their [developer dashboard](https://developer.spotify.com/dashboard). We need three things: a client ID, a client secret, and a refresh token. Make sure you don't lose your refresh token, as the way Spotify currently provides that is a little strange.

---

### Configuration

Now that you have your credentials, add them to an object within the `plugins` array in `gatsby-config.js`. Make sure you never share your client secret, as bad actors could potentially access the Spotify API as you.

There are three different times ranges that can be fetched:

1. `short_term` will provide your data from the last four weeks
2. `medium_term` will provide data from the last six months
3. `long_term` will provide data since your account was created

You can include all three time ranges here in your `gatsby-config.js`, though we are only going to be using `short_term` in our example.

#### Update your configuration file

##### gatsby-config.js

```
plugins: [
    {
    resolve: `gatsby-source-spotify`,
    options: {
        clientId: `<CLIENT_ID>`,
        clientSecret: `<CLIENT_SECRET>`, // Don't add to public repository
        refreshToken: `<REFRESH_TOKEN>`,

        fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
      },
    }
]
```

---

### Display the artist list

#### Create a page to display the list

This would be similar to my [Spotify](/spotify) page. I just added a `spotify.js` file to my `src/pages` directory in my Gatsby app. You can see I am using a `SpotifyTopArtists` component that we will create next.

##### spotify.js

```
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpotifyTopArtists from "../components/spotifyTopArtists"

const Spotify = () => (
    <Layout>
        <SEO title="Spotify" />
        <h1>Spotify</h1>
        <SpotifyTopArtists />
    </Layout>
)

export default Spotify

```

#### Create the list component

I created a `spotifyTopArtists.js` component within the `components` directory. The list makes its own GraphQL query to grab the data from Spotify. You can see I am passing in `short_term` to grab only the past four weeks, but you can add `long_term` or `medium_term` here, as well.

##### spotifyTopArtists.js

```javascript
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const SpotifyTopArtists = () => {
  const data = useStaticQuery(graphql`
    query SpotifyTopArtistsQuery {
      allSpotifyTopArtist(
        filter: { time_range: { eq: "short_term" } }
        sort: { frontmatter: order }
      ) {
        edges {
          node {
            name
            genres
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allSpotifyTopArtist.edges && (
        <div className="spotify__top-artists">
          <h2>Top 20 Artists</h2>
          <p>These are my top 20 artists from the past four weeks.</p>
          <div className="spotify__list">
            {data.allSpotifyTopArtist.edges.map((artist, index) => (
              <div key={index} className="spotify__list-item d-flex">
                <div className="spotify__album-cover">
                  <Img
                    fluid={artist.node.image.localFile.childImageSharp.fluid}
                  />
                </div>
                <h3>
                  <span className="spotify__list-item-number">{index + 1}</span>
                  {artist.node.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default SpotifyTopArtists
```

---

### Styles

#### Implementing Sass

If you need help hooking up Sass into your GatsbyJS project I wrote another article here:

[GatsbyJS Setup with Sass and Markdown Support](/blog/gatsbyjs-setup-with-sass-and-markdown-support)

#### Create your stylesheet

I added a `spotify.scss` to my app with some basic styles that should help get you started with your artist list.

##### spotify.scss

```scss
.spotify__list {
  padding: 1rem;
  background-color: #f7f7f7;
  height: 40rem;
  overflow-y: scroll;
  margin-bottom: 2rem;
}

.spotify__list-item {
  padding: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
}

.spotify__list-item-number {
  font-size: 0.75rem;
  color: #f7f7f7;
  background-color: #000000;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  line-height: 1.5rem;
  display: inline-block;
  text-align: center;
  margin-right: 0.5rem;
}

.spotify__album-cover {
  width: 5rem;
  height: 4.875rem;
  margin-right: 1rem;
  background-color: #000000;
  overflow: hidden;
}
```
