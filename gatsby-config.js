require('dotenv').config(); // read .env file

module.exports = {
	siteMetadata: {
		siteTitle: 'Gaboland',
		siteTitleAlt: 'Gaboland - Make Solutions, Don\'t Problems',
		siteHeadline: 'Gaboland - Portfolio by gabrielba15',
		siteUrl: 'https://gabo.land',
		siteDescription: 'Portfolio by Gabriel',
		siteLanguage: 'en',
		siteImage: '/lion-banner.jpg',
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
				name: 'Gaboland - Make Solutions, Don\'t Problems',
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
	].filter(Boolean),
};
