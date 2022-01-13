require('dotenv').config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
	siteMetadata: {
		siteTitle: 'Gaboland',
		siteTitleAlt: 'Gaboland - Make Solutions, Dont Problems',
		siteHeadline: 'Gaboland - Portfolio by @gabrielba15',
		siteUrl: 'https://testing.gaboland.vercel.app',
		siteDescription: 'Portfolio by Gabriel',
		siteLanguage: 'en',
		siteImage: '/banner.jpg',
		author: '@gabrielba15',
	},
	plugins: [
		{
			resolve: '@lekoarts/gatsby-theme-emma',
			options: {},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Gaboland - Make Solutions, Dont Problems',
				short_name: 'Gaboland',
				description: 'Portfolio by Gabriel',
				start_url: '/',
				background_color: '#141821',
				display: 'standalone',
				icons: [
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		},
		'gatsby-plugin-gatsby-cloud',
		shouldAnalyseBundle && {
			resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
			options: {
				analyzerMode: 'static',
				reportFilename: '_bundle.html',
				openAnalyzer: false,
			},
		},
	].filter(Boolean),
};
