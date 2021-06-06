const path = require('path');

// TODO Remove the hard-coded URl to the favicon here
// Potentially pull in from a settings JSON file
module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-tinacms',
			options: {
				enabled: process.env.NODE_ENV !== 'production',
				sidebar: true,
				plugins: [
					{
            resolve: 'gatsby-tinacms-git',
            options: {
              pathToContent: '/',
              defaultCommitMessage: `Edited with Rockin' Blocks! 🎸`,
              defaultCommitName: `Rockin' Blocks`,
              defaultCommitEmail: 'git@rockinblocks.io',
              pushOnCommit: false,
            },
          },
					'gatsby-tinacms-remark',
					'gatsby-tinacms-json',
				],
			},
		},
	],
};
