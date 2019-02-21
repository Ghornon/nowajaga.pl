const path = require('path');

module.exports = {
	siteMetadata: {
		title: `NowaJaga.pl`,
		description: `Nowajaga.pl - restauracja, pyszne jedzenie, na dowóz, catering i kręgle a wszystko to w jednym miejscu!`,
		author: `@ghornon`,
		siteUrl: `https://nowajaga.pl`
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
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `NowaJaga.pl`,
				short_name: `NowaJaga`,
				start_url: `/`,
				background_color: `#424953`,
				theme_color: `#424953`,
				display: `minimal-ui`,
				icon: `src/assets/img/logo.png`, // This path is relative to the root of the site.
				icons: [
					{
						src: 'favicons/icon-48x48.png',
						sizes: '48x48',
						type: 'image/png'
					},
					{
						src: 'favicons/icon-72x72.png',
						sizes: '72x72',
						type: 'image/png'
					},
					{
						src: 'favicons/icon-96x96.png',
						sizes: '96x96',
						type: 'image/png'
					},
					{
						src: 'favicons/icon-144x144.png',
						sizes: '144x144',
						type: 'image/png'
					},
					{
						src: 'favicons/icon-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'favicons/icon-256x256.png',
						sizes: '256x256',
						type: 'image/png'
					},
					{
						src: 'favicons/icon-384x384.png',
						sizes: '384x384',
						type: 'image/png'
					},
					{
						src: 'favicons/icon-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				],
				include_favicon: true // Include favicon
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
					Sass: path.resolve(__dirname, 'src/assets/css'),
					Store: path.relative(__dirname, 'src/store'),
					Actions: path.relative(__dirname, 'src/actions')
				},
				extensions: []
			}
		}
	]
};
