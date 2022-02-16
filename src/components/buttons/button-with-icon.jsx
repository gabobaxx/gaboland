import * as React from 'react';
import { Link } from 'gatsby';
import { Box, /*Button,*/ Link as TLink } from 'theme-ui';

const ButtonWithIconDefault = ({ children, borderColor, to }) => (
	<TLink
		as={Link}
		to={to}
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
	</TLink>
);
const ButtonWithIconRight = ({ children, icon, borderColor, to }) => (
	<ButtonWithIconDefault borderColor={borderColor} to={to}>
		<Box
			sx={{
				fontSize: '1rem',
				fontFamily: 'body',
				fontWeight: 'bold',
				mr: '0.5rem',
			}}
		>
			{children}
		</Box>
		<Box
			sx={{ fontSize: 24 }}
			className={
				icon === 'email' ? 'bi bi-inboxes-fill' : 'bi bi-' + icon
			}
		></Box>
	</ButtonWithIconDefault>
);

const ButtonWithIconLeft = ({ children, icon, borderColor, to }) => (
	<ButtonWithIconDefault borderColor={borderColor} to={to}>
		<Box
			sx={{
				fontSize: 24,
			}}
			className={
				icon === 'email' ? 'bi bi-inboxes-fill' : 'bi bi-' + icon
			}
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
	to = '/',
	children,
	side = 'left',
	icon = 'github',
	borderColor = 'p700',
}) => {
	if (side === 'right')
		return (
			<ButtonWithIconRight borderColor={borderColor} icon={icon} to={to}>
				{children || 'Right'}
			</ButtonWithIconRight>
		);

	if (side === 'left')
		return (
			<ButtonWithIconLeft borderColor={borderColor} icon={icon} to={to}>
				{children || 'Left'}
			</ButtonWithIconLeft>
		);

	return 'Side Missing';
};

export default ButtonWithIcon;
