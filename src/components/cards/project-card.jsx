import * as React from 'react';
import { Box } from 'theme-ui';
import SmallCard from './small-card';
import { BadgeWithIcon } from 'components/badges/badge';
import ButtonWithIcon from 'components/buttons/button-with-icon';

/**
 * TODO: padding-right isn't necessary at button (kill it).
 */

const ProjectCard = ({
	tag = 'Coding',
	title = 'Skill Card',
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
			<ButtonWithIcon icon="arrow-right-short" side="right">
				Github
			</ButtonWithIcon>
		</Box>
	</SmallCard>
);

export default ProjectCard;
