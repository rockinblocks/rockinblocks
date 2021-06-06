const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Rockin' Blocks`,
    description: `Blocks that just rock!`,
    author: `@RockinBlocksJS`,
    siteUrl: `https://www.rockinblocks.io`
  },
  plugins: [
    `@rockinblocks/gatsby-plugin-rockinblocks`,
    `@rockinblocks/gatsby-plugin-rockinblocks-cms`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: path.join(__dirname, `/src/content/docs`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.join(__dirname, `/src/content/posts`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: `GTM-WFW54V5`,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}