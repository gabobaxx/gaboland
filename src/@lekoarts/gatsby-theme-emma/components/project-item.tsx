/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { LargeProjectCard } from 'components/cards/project-card';

type ProjectItemProps = {
	node: {
		repo: string;
		badges: string[];
		preview: string;
		description: string;
		color: string;
		title: string;
		slug: string;
		service: string;
		client: string;
		cover: {
			childImageSharp: {
				gatsbyImageData: IGatsbyImageData;
			};
		};
	};
	style: any;
	eager?: boolean;
};

const remote = 'https://github.com';

const ProjectItem = ({ node, style, eager }: ProjectItemProps) => (
	<animated.div>
		<div
			sx={{
				a: {
					width: 500,
					transition: `all 0.3s ease-in-out`,
					textDecoration: `none`,
					'&:hover': {
						textDecoration: `none`,
					},
				},
			}}
		>
			<Link
				to={node.slug}
				aria-label={`View detail page of ${node.title}`}
			>
				<LargeProjectCard
					tag={node.service}
					title={node.title}
					badges={node.badges}
					github={node.repo}
					preview={'https://' + node.preview}
					borderColor={node.color}
				>
					{node.description}
				</LargeProjectCard>
			</Link>
		</div>
	</animated.div>
);

export default ProjectItem;
