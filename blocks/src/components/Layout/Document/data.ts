import { IDocumentProps } from './Document';

const DocumentData: IDocumentProps = {
	frontmatter: {
		date_created: '2020-04-12',
		date_updated: '2020-04-12',
		description:
      'Using Markdown with Gatsby and GraphQL makes the creation of new content a breeze.',
		keywords: 'markdown, gatsby, graphql',
		path: '/blog/gatsbyjs-setup-with-sass-and-markdown-support',
		title: 'GatsbyJS Setup with Sass and Markdown Support',
		type: 'document'
	},
	html: '<h2>Show off a fancy list of our top Spotify artists without much hassle</h2>\n<p>I knew that Spotify had a really great API, but I had never had a chance to really tap into it to see what I could do. What could be a better project than creating a list of my recent jams? You can check out a working example using my Spotify account <a href="/spotify">here</a>.</p>\n<hr>\n<h3>Package Installation</h3>'
};

export default DocumentData;
