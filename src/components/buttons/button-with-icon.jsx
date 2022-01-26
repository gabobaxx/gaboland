import * as React from 'react';
import { Box, Button, Link as TLink } from 'theme-ui';
import { Link } from 'gatsby';

export const LinkWithIcon = () => (
	<TLink
		as={Link}
		key="about"
		to="/about"
		sx={{
			// p: 24,
			border: '2px solid',
			borderColor: 'warning',
			cursor: 'pointer',
			textAlign: 'center',
			textDecoration: 'none',
			borderRadius: '8px',
			minWidth: '8.125rem',
			padding: '0.5rem',
			fontSize: '0.875rem',
			color: 'warning',
			display: 'flex',
			flexDirection: 'row',
		}}
	>
		<Box
			sx={{
				m: '0 auto',
				fontSize: '1rem',
				fontFamily: 'body',
				fontWeight: 'bold',
			}}
		>
			About Me
		</Box>
		<Box
			sx={{
				fontSize: 24,
			}}
			className="bi bi-arrow-right-short"
		></Box>
	</TLink>
);

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
