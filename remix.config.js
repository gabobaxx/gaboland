/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	appDirectory: 'src',
	ignoredRouteFiles: ['**/.*'],
	serverBuildPath: 'api/index.js',
	serverDependenciesToBundle: ['marked'],
	server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
	serverModuleFormat: 'cjs',

	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
};
