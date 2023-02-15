/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx */
import { jsx, Container, Themed } from 'theme-ui';
import { useTrail } from 'react-spring';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from './layout';
import ProjectItem from './project-item';

type ProjectsProps = {
	projects: {
		repo: string;
		badges: string[];
		preview: string;
		description: string;
		color: string;
		slug: string;
		title: string;
		service: string;
		client: string;
		cover: {
			childImageSharp: {
				gatsbyImageData: IGatsbyImageData;
			};
		};
	}[];
	[key: string]: any;
};

const ProjectsPlaceholderText = () => (
	<Layout>
		<Container>
			<Themed.p>
				Hi!{' '}
				<span role="img" aria-label="Wave emoji">
					👋
				</span>{' '}
				<br />
				Thanks for using <b>@lekoarts/gatsby-theme-emma</b>. You currently don't
				have any content in your <i>projects</i> folder - that's why this page
				displays a placeholder text. Head over to the{' '}
				<Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emma">
					README
				</Themed.a>{' '}
				to learn how to setup them.
			</Themed.p>
			<Themed.p>
				<b>TL;DR:</b> <br />
				The starter automatically created the folder{' '}
				<code>content/projects</code>. Go into this folder, create a new folder
				called <code>example</code> and create an <code>index.mdx</code> file
				there and place an image. Edit the frontmatter like described in the{' '}
				<Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emma">
					README
				</Themed.a>
				.
			</Themed.p>
		</Container>
	</Layout>
);

const Projects = ({ projects }: ProjectsProps) => {
	const trail = useTrail(projects.length, {
		from: { height: '0%' },
		to: { height: '100%' },
	});

	if (projects.length === 0) return <ProjectsPlaceholderText />;

	return (
		<Layout>
			<main
				sx={{
					// Content Layout for par elements
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(366px, auto))',
					gap: '1rem',
					maxWidth: '90%',
					margin: '24px auto',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '100vh',
				}}
			>
				{trail.map((style, index) => (
					<ProjectItem
						style={style}
						eager={index === 0}
						node={projects[index]}
						key={projects[index].slug}
					/>
				))}
			</main>
		</Layout>
	);
};

export default Projects;
