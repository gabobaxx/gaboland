import * as React from 'react';
import { Box, Button } from 'theme-ui';

const ButtonWithIconDefault = ({ children, borderColor }) => (
	<Button
		sx={{
			p: 0,
			color: 'gs800',
			display: 'flex',
			cursor: 'pointer',
			flexDirection: 'row',
			borderColor: borderColor,
			backgroundColor: 'transparent',
		}}
	>
		{children}
	</Button>
);
const ButtonWithIconRight = ({ children, icon, borderColor }) => (
	<ButtonWithIconDefault borderColor={borderColor}>
		<Box
			sx={{
				fontSize: '1rem',
				fontFamily: 'body',
				fontWeight: 'bold',
			}}
		>
			{children}
		</Box>
		<Box
			sx={{
				fontSize: 24,
			}}
			className={icon === 'email' ? 'bi bi-inboxes-fill' : 'bi bi-' + icon}
		></Box>
	</ButtonWithIconDefault>
);

const ButtonWithIconLeft = ({ children, icon, borderColor }) => (
	<ButtonWithIconDefault borderColor={borderColor}>
		<Box
			sx={{
				fontSize: 24,
			}}
			className={icon === 'email' ? 'bi bi-inboxes-fill' : 'bi bi-' + icon}
		></Box>
		<Box
			sx={{
				ml: 10,
				fontSize: '1rem',
				fontFamily: 'body',
				fontWeight: 'bold',
			}}
		>
			{children}
		</Box>
	</ButtonWithIconDefault>
);

const ButtonWithIcon = ({
	children,
	side = 'left',
	icon = 'github',
	borderColor = 'p700',
}) => {
	if (side === 'right')
		return (
			<ButtonWithIconRight borderColor={borderColor} icon={icon}>
				{children || 'Right'}
			</ButtonWithIconRight>
		);

	if (side === 'left')
		return (
			<ButtonWithIconLeft borderColor={borderColor} icon={icon}>
				{children || 'Left'}
			</ButtonWithIconLeft>
		);

	return 'Side Missing';
};

export default ButtonWithIcon;
