import { Flex, Paragraph } from 'theme-ui';
import Badge from 'components/badges';
import BadgeLink from 'components/badges/badge-link';

const projects = [
	{
		id: 1,
		title: 'Calas Dreamer',
		instagram: 'calasdreamer',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibusegestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sitamet, consectetur.',
		styles: { color: { background: 'CalasDreamerBackground', font: 'GS100' } },
		badge: { title: 'Developer', icon: 'laptop' },
	},
	{
		id: 2,
		title: 'Terapist',
		instagram: 'gabrielba15',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibusegestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sitamet, consectetur.',
		styles: { color: { background: 'TerapistBackground', font: 'GS100' } },
		badge: { title: 'Developer', icon: 'laptop' },
	},
];

const Projects = () => {
	return (
		<>
			{projects.map((project) => (
				<Flex
					key={project.id}
					variant="layout.card"
					sx={{
						gap: '16px',
						flexDirection: 'column',
						color: project.styles.color.font,
						backgroundColor: project.styles.color.background,
					}}
				>
					<Flex sx={{ justifyContent: 'space-between' }}>
						<h2>{project.title}</h2>
						<Badge
							title={project.badge.title}
							icon={project.badge.icon}
							color={{ background: '#FCFCFC', font: 'P900' }}
						/>
					</Flex>
					<Paragraph sx={{ fontSize: '16px' }}>{project.description}</Paragraph>
					<Flex sx={{ justifyContent: 'flex-end' }}>
						<BadgeLink
							icon="instagram"
							title="Instagram"
							href={`https://instagram.com/${project.instagram}`}
							color={{ background: 'GS100', font: 'P900' }}
							hover={{ background: 'GS100', color: 'primary' }}
						/>
					</Flex>
				</Flex>
			))}
		</>
	);
};
export default Projects;
