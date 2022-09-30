/** @jsx jsx */
import { animated, useSpring, config } from 'react-spring';
import { Container, jsx, Flex, Heading, Box, Card } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from './seo';
import Hero from '@lekoarts/gatsby-theme-emma/src/components/hero';
import ProjectInfo from './project-info';
import Badge, { BadgeWithIcon } from 'components/badges/badge';
import ButtonWithIcon from 'components/buttons/button-with-icon';
import LinkWithIcon from 'components/links/link-with-icon';

const LargeProjectCard = ({
	title = 'Large Project Card',
	github = 'https://github.com/',
	preview = '/',
	badges = ['Design', 'Programming', 'Web', 'Frontend'],
	tag = 'Full Stack',
	children = 'Children',
	borderColor = 'p700',
}) => (
	<Card
		sx={{
			variant: 'cards',
			minHeight: 343,
			borderColor: borderColor,
			maxWidth: 'none',
			width: '100%',
		}}
		variant="cards.small"
	>
		<Card as="section" variant="cards.small.content" sx={{ width: '90%' }}>
			<Box
				as="header"
				sx={{
					fontSize: 24,
					color: 'gs800',
					fontFamily: 'head',
					fontStyle: 'normal',
					fontWeight: 'bold',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				{title}
				<BadgeWithIcon>{tag}</BadgeWithIcon>
			</Box>
			<Flex
				sx={{
					flexDirection: 'row',
					my: '1.5rem',
					gap: '5px',
					justifyContent: 'space-around',
				}}
			>
				{badges.map((badgeText) => (
					<Badge borderColor="gs800" key={badgeText}>
						{badgeText}
					</Badge>
				))}
			</Flex>
			<Box
				sx={{
					mb: '1.5rem',
					fontFamily: 'body',
					fontWeight: 'light',
					fontSize: '0.875rem',
					color: 'gs800',
					textAlign: 'center',
				}}
				as="p"
			>
				{children}
			</Box>
			<Flex
				sx={{
					justifyContent: 'space-between',
					alignItems: 'center',
					fontFamily: 'body',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontSize: '1rem',
					p: 0,
				}}
				as="footer"
			>
				<ButtonWithIcon
					icon="github"
					side="left"
					to={'https://github.com/' + github}
				>
					Github
				</ButtonWithIcon>
				<LinkWithIcon to={preview} borderColor={borderColor}>
					Preview
				</LinkWithIcon>
			</Flex>
		</Card>
	</Card>
);

type ProjectProps = {
	data: {
		project: {
			repo: string;
			badges: string[];
			preview: string;
			description: string;
			body: string;
			excerpt: string;
			client: string;
			color: string;
			date: string;
			service: string;
			slug: string;
			title: string;
			cover: {
				childImageSharp: {
					gatsbyImageData: IGatsbyImageData;
					resize: {
						src: string;
					};
				};
			};
		};
	};
	[key: string]: any;
};

const Project = ({ data: { project } }: ProjectProps) => {
	const titleProps = useSpring({
		config: config.slow,
		from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
		to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
	});
	const infoProps = useSpring({
		config: config.slow,
		delay: 500,
		from: { opacity: 0 },
		to: { opacity: 1 },
	});
	const contentProps = useSpring({
		config: config.slow,
		delay: 1000,
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	return (
		<Layout>
			<SEO
				title={project.title}
				description={project.excerpt}
				pathname={project.slug}
				image={project.cover.childImageSharp.resize!.src}
			/>
			<Hero
				image={project.cover.childImageSharp.gatsbyImageData}
				color="#333"
			>
				<Flex
					sx={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						maxWidth: '5xl',
						margin: '0 auto',
						padding: 4,
						zIndex: 2,
						flexDirection: 'column',
					}}
				>
					<animated.div style={titleProps}>
						<Heading
							as="h1"
							variant="styles.h1"
							sx={{ color: 'gs100' }}
						>
							{project.title}
						</Heading>
					</animated.div>
				</Flex>
			</Hero>
			<Container>
				<animated.div
					style={contentProps}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1.5rem',
						alignItems: 'center',
					}}
				>
					<LargeProjectCard
						tag={project.service}
						title={project.title}
						badges={project.badges}
						github={project.repo}
						preview={'https://' + project.preview}
						borderColor={project.color}
					>
						{project.description}
					</LargeProjectCard>
					<div sx={{ width: '100%' }}>
						<MDXRenderer>{project.body}</MDXRenderer>
					</div>
					<img
						sx={{
							width: '100%',
							height: '100%',
							boxSizing: 'border-box',
							borderRadius: '1.25rem',
							boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%)',
						}}
						src={project.cover.childImageSharp.resize.src}
						alt={`${project.title} preview image`}
					/>
				</animated.div>
			</Container>
		</Layout>
	);
};

export default Project;
