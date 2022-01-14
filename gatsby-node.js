const withDefaults = require('./utils/default-options');
const path = require('path');
const fs = require('fs');

exports.onCreateWebpackConfig = ({ actions }, options) => {
	const srcPath = options.srcPath || path.resolve(__dirname, './src');

	try {
		const stat = fs.statSync(srcPath);
		if (!stat.isDirectory) {
			console.warn(`src path is not a directory ("${srcPath}")`);
		}
	} catch (err) {
		console.warn(`src path not found at "${srcPath}"`);
	}

	actions.setWebpackConfig({
		resolve: {
			modules: [srcPath, 'node_modules'],
		},
	});
};

// These template are only data-fetching wrappers that import components
// const projectsTemplate = require.resolve('./src/templates/projects-query.tsx');
const projectsTemplate = require.resolve(
	'./node_modules/@lekoarts/gatsby-theme-emma-core/src/templates/projects-query.tsx'
);
const projectTemplate = require.resolve(
	'./node_modules/@lekoarts/gatsby-theme-emma-core/src/templates/project-query.tsx'
);
const pageTemplate = require.resolve(
	'./node_modules/@lekoarts/gatsby-theme-emma-core/src/templates/page-query.tsx'
);

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
	const { createPage } = actions;

	const { basePath, formatString } = withDefaults(themeOptions);

	createPage({
		path: basePath,
		component: require.resolve('./src/templates/home.jsx'),
	});

	createPage({
		path: '/g/projects',
		component: projectsTemplate,
	});

	const result = await graphql(`
		query {
			allProject(sort: { fields: date, order: DESC }) {
				nodes {
					slug
					defer
				}
			}
			allPage {
				nodes {
					slug
					defer
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild(
			'There was an error loading your projects or pages',
			result.errors
		);
		return;
	}

	const projects = result.data.allProject.nodes;

	projects.forEach((project) => {
		createPage({
			path: project.slug,
			component: projectTemplate,
			context: {
				slug: project.slug,
				formatString,
			},
			defer: project.defer,
		});
	});

	const pages = result.data.allPage.nodes;

	if (pages.length > 0) {
		pages.forEach((page) => {
			createPage({
				path: page.slug,
				component: pageTemplate,
				context: {
					slug: page.slug,
				},
				defer: page.defer,
			});
		});
	}
};
