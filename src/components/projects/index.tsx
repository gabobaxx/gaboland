import { Flex, Box } from 'theme-ui';
import type { ReactNode } from 'react';

import { github } from 'utils';
import ProjectCard from 'components/cards/project-card';
import SectionLinks from 'components/links/section-links';

const FlexContent = ({ children }: { children: ReactNode }) => (
	<Flex
		sx={{
			gap: '1.5rem',
			textAlign: 'center',
			alignItems: 'center',
			flexDirection: 'column',
		}}
	>
		{children}
	</Flex>
);

export default function Projects() {
	return (
		<Box as="section">
			<h2>Projects</h2>
			<FlexContent>
				<ProjectCard
					title="Gaboland"
					borderColor="success"
					to="https://github.com/gabrielba15/gaboland"
				>
					My personal website or portfolio. This projects is built with Gatsby,
					React and Theme UI.
				</ProjectCard>
				<ProjectCard
					title="Giffy"
					to="https://github.com/gabrielba15/react-giffy"
				>
					Gifs App using React, Styled Components and consuming giphy api.
				</ProjectCard>
				<ProjectCard
					title="PHP & MYSQL Parcial"
					borderColor="success"
					to="https://github.com/gabrielba15/php_mysql_parcial"
				>
					CRUD App using PHP, MySQL and Bootstrap for a university assessment.
				</ProjectCard>
			</FlexContent>
			<SectionLinks
				icon="github"
				text="All Projects"
				to={{ link: github, button: '/projects' }}
			/>
		</Box>
	);
}
