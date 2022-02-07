const fs = require('fs');
const path = require('path');
const withDefaults = require('./utils/default-options');

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

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions;

	createTypes(`
    interface Project implements Node {
      id: ID!
			body: String!
			repo: String!
      color: String!
			title: String!
      client: String!
      service: String!
			preview: String!
			badges: [String!]
			description: String!
      slug: String! @slugify
      date: Date! @dateformat
      defer: Boolean @defaultFalse
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 160): String!
    }

    interface Page implements Node {
      id: ID!
      slug: String!
      title: String!
      defer: Boolean @defaultFalse
      cover: File @fileByRelativePath
      excerpt(pruneLength: Int = 160): String!
    }

    type MdxProject implements Node & Project {
			repo: String!
      color: String!
      title: String!
      client: String!
      service: String!
			preview: String!
			badges: [String!]
			description: String!
      slug: String! @slugify
      date: Date! @dateformat
      defer: Boolean @defaultFalse
      cover: File! @fileByRelativePath
      body: String! @mdxpassthrough(fieldName: "body")
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
    }

		type MdxProject2 implements Node & Project {
			repo: String!
      color: String!
      title: String!
      client: String!
      service: String!
			preview: String!
			badges: [String!]
			description: String!
      slug: String! @slugify
      date: Date! @dateformat
      defer: Boolean @defaultFalse
      cover: File! @fileByRelativePath
      body: String! @mdxpassthrough(fieldName: "body")
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
    }

    type MdxPage implements Node & Page {
      slug: String!
      title: String!
      defer: Boolean @defaultFalse
      cover: File @fileByRelativePath
      body: String! @mdxpassthrough(fieldName: "body")
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
    }
  `);
};

exports.onCreateNode = (
	{ node, actions, getNode, createNodeId, createContentDigest },
	themeOptions
) => {
	const { createNode, createParentChildLink } = actions;

	const { projectsPath } = withDefaults(themeOptions);

	// Make sure that it's an MDX node
	if (node.internal.type !== 'Mdx') return;

	// Create a source field
	// And grab the sourceInstanceName to differentiate the different sources
	// In this case "projectsPath" and "pagesPath"
	const fileNode = getNode(node.parent);
	const source = fileNode.sourceInstanceName;

	// Check for "projects" and create the "Project" type
	if (node.internal.type === 'Mdx' && source === projectsPath) {
		const fieldData = {
			slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
			title: node.frontmatter.title,
			client: node.frontmatter.client,
			cover: node.frontmatter.cover,
			date: node.frontmatter.date,
			service: node.frontmatter.service,
			color: node.frontmatter.color,
			defer: node.frontmatter.defer,
			badges: node.frontmatter.badges,
			repo: node.frontmatter.repo,
			preview: node.frontmatter.preview,
			description: node.frontmatter.description,
		};

		const mdxProjectId = createNodeId(`${node.id} >>> MdxProject`);

		createNode({
			...fieldData,
			// Required fields
			id: mdxProjectId,
			parent: node.id,
			children: [],
			internal: {
				type: 'MdxProject2',
				contentDigest: createContentDigest(fieldData),
				content: JSON.stringify(fieldData),
				description: 'Mdx implementation of the Project interface',
			},
		});

		createParentChildLink({ parent: node, child: getNode(mdxProjectId) });
	}
};

const projectTemplate = require.resolve(
	'./src/@lekoarts/gatsby-theme-emma/@lekoarts/gatsby-theme-emma-core/templates/project-query.tsx'
);
const projectsTemplate = require.resolve(
	'./src/@lekoarts/gatsby-theme-emma/@lekoarts/gatsby-theme-emma-core/templates/projects-query.tsx'
);
const pageTemplate = require.resolve('./src/templates/page-query.tsx');

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
	const { createPage } = actions;

	const { basePath, formatString } = withDefaults(themeOptions);

	createPage({
		path: basePath,
		component: require.resolve('./src/templates/home.jsx'),
	});

	createPage({
		path: '/projects',
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
