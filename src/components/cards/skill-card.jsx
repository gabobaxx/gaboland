import * as React from 'react';
import { Box } from 'theme-ui';
import SmallCard from './small-card';
import ButtonWithIcon from 'components/buttons/button-with-icon';

const SkillCard = ({
	title = 'Skill Card',
	borderColor = 'p700',
	children = 'Children',
	to = '/',
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
			}}
		>
			{title}
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
				Know More
			</ButtonWithIcon>
		</Box>
	</SmallCard>
);

export default SkillCard;
