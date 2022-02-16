/** @jsx jsx */
import { Box, Flex, jsx, Card } from 'theme-ui';
import SmallCard from './small-card';
import Badge, { BadgeWithIcon } from 'components/badges/badge';
import ButtonWithIcon from 'components/buttons/button-with-icon';
import LinkWithIcon from 'components/links/link-with-icon';

const ProjectCard = ({
	to = '/projects',
	tag = 'Coding',
	title = 'Project Card',
	children = 'Children',
	borderColor = 'p700',
}) => (
	<SmallCard borderColor={borderColor}>
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
		<Box
			sx={{
				mt: '0.75rem',
				fontFamily: 'body',
				fontWeight: 'light',
				fontSize: '0.875rem',
				color: 'gs800',
			}}
			as="p"
		>
			{children}
		</Box>
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				fontFamily: 'body',
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontSize: '1rem',
				p: 0,
			}}
			as="footer"
		>
			<ButtonWithIcon icon="arrow-right-short" side="right" to={to}>
				Github
			</ButtonWithIcon>
		</Box>
	</SmallCard>
);

export const LargeProjectCard = ({
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
		}}
		variant="cards.small"
	>
		<Card as="section" variant="cards.small.content">
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

export default ProjectCard;
