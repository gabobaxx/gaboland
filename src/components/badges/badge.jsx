import React from 'react';
import { Box } from 'theme-ui';

const Badge = ({ children, borderColor = 't900' }) => (
	<Box
		sx={{
			width: 80,
			height: '1.25rem',
			border: '2px solid',
			borderColor: borderColor,
			borderRadius: 30,
			fontFamily: 'body',
			fontSize: '0.5rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'gs700',
			fontWeight: 'bold',
			lineHeight: '170%',
		}}
	>
		{children}
	</Box>
);

export const BadgeWithIcon = ({ children, icon = 'tag' }) => (
	<Box
		sx={{
			width: 80,
			height: '1.25rem',
			border: '2px solid',
			borderColor: 't900',
			borderRadius: 30,
			fontFamily: 'body',
			fontSize: '0.5rem',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-around',
			fontWeight: 'bold',
			lineHeight: '170%',
		}}
	>
		<Box>{children}</Box>
		<Box
			sx={{
				fontSize: '.7rem',
				transform: 'rotate(-90deg)',
			}}
			className={'bi bi-' + icon}
		></Box>
	</Box>
);

export default Badge;
