const path = require('path');

// TODO Remove the hard-coded URl to the favicon here
// Potentially pull in from a settings JSON file
module.exports = {
	plugins: [
		`gatsby-plugin-tinacms`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-rockinblocks`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/theme/favicon.png`, // This path is relative to the root of the site.
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
		`gatsby-transformer-remark-plaintext`,
		`gatsby-plugin-sass`
	],
};
