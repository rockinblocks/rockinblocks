const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Rockin' Blocks`,
    description: `Blocks that Just Rock`,
    author: `@RockinBlocksJS`,
    siteUrl: `https://rockinblocks.io`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        enabled: process.env.NODE_ENV !== 'production',
        sidebar: true,
        plugins: [
          'gatsby-tinacms-git',
          'gatsby-tinacms-json',
          'gatsby-tinacms-remark',
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
        name: `images`,
        path: path.join(__dirname, `/src/images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `componentJson`,
        path: path.join(__dirname, `/src/components`),
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-transformer-remark-plaintext`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@elements": path.resolve(__dirname, 'src/components/Elements'),
          "@hooks": path.resolve(__dirname, 'src/hooks'),
          "@layout": path.resolve(__dirname, 'src/components/Layout'),
          "@utilities": path.resolve(__dirname, 'src/components/Utilities'),
          "@styles": path.resolve(__dirname, 'src/styles'),
        },
        extensions: ['js', 'jsx']
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_GTM_PROPERTY_ID,
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}