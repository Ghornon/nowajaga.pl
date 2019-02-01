const path = require('path');

module.exports = {
	siteMetadata: {
		title: `nowajaga.pl`,
		description: `Nowajaga.pl - restauracja, pyszne jedzenie, na dowóz, catering i kręgle a wszystko to w jednym miejscu!`,
		author: `@ghornon`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `img`,
				path: `${__dirname}/src/assets/img`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `nowajaga.pl`,
				short_name: `nowajaga.pl`,
				start_url: `/`,
				background_color: `#424953`,
				theme_color: `#424953`,
				display: `minimal-ui`,
				icon: `src/assets/img/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					Components: path.resolve(__dirname, 'src/components'),
					Assets: path.resolve(__dirname, 'src/assets'),
					Pages: path.resolve(__dirname, 'src/pages'),
					Sass: path.resolve(__dirname, 'src/assets/css')
				},
				extensions: []
			}
		}
	]
};
