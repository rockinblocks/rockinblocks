const path = require("path")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rockin' Blocks`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `/src/content/pages`),
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: path.join(__dirname, `/src/content/docs`),
      },
    },
    {
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false,
							languageExtensions: [
								{
									language: 'superscript',
									extend: 'javascript',
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
								user: 'root',
								host: 'localhost',
								global: false,
							},
							escapeEntities: {},
						},
					},
				],
			},
		},
  ],
}
