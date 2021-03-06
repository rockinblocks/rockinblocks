/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const SEO = frontmatter => {
	const { title, description } = frontmatter;
	const { site } = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
	);

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		url: "http://www.rockinblocks.io/"
	};

	return (
		<Helmet
			htmlAttributes={{
				lang: "en"
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:card",
					content: "summary"
				},
				{
					name: "twitter:creator",
					content: "Jed Darrohn"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: description
				}
			]}
		>
			<script type="application/ld+json">{ JSON.stringify(websiteSchema) }</script>
		</Helmet>
	);
};

SEO.defaultProps = {
	lang: "en",
	meta: [],
	description: ""
};

export default SEO;
