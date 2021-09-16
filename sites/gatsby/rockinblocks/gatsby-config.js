const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Rockin' Blocks`,
    description: `Blocks that just rock!`,
    author: `@RockinBlocksJS`,
    siteUrl: `https://www.rockinblocks.io`,
  },
  plugins: [
    `@rockinblocks/gatsby-plugin-rockinblocks`,
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        enabled: process.env.NODE_ENV !== "production",
        sidebar: {
          position: "displace",
        },
        plugins: [
          {
            resolve: "gatsby-tinacms-git",
            options: {
              pathToContent: "/",
              defaultCommitMessage: `Edited with Rockin' Blocks! 🎸`,
              defaultCommitName: `Rockin' Blocks`,
              defaultCommitEmail: "git@rockinblocks.io",
              pushOnCommit: false,
            },
          },
          "gatsby-tinacms-remark",
          "gatsby-tinacms-json",
        ],
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `/src/content/pages`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `features`,
        path: path.join(__dirname, `/src/content/pages/features`),
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
