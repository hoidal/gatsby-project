/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Better Hand Books',
		description:
			'Better Hand Books is a non-profit geared at ensuring your old, used, and unwanted books find a home with organizations in need.',
		author: '@BetterHandBooks',
		siteUrl: 'https://betterhandbooks.com',
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.betterhandbooks.com',
				sitemap: 'https://www.betterhandbooks.com/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-transition-link`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify`,
	],
}
