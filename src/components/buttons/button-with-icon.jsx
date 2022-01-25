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

const ButtonWithIcon = ({
	children,
	side = 'left',
	icon = 'github',
	borderColor = 'p700',
}) =>
	side === 'right' ? (
		<Button
			sx={{
				display: 'flex',
				flexDirection: 'row',
				backgroundColor: 'transparent',
				pl: 0,
				cursor: 'pointer',
				color: 'gs800',
				// width: 108,
				pt: '1rem',
				pb: 0,
				borderColor: borderColor,
			}}
		>
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
				className={
					icon === 'email' ? 'bi bi-inboxes-fill' : 'bi bi-' + icon
				}
			></Box>
		</Button>
	) : (
		<Button
			sx={{
				display: 'flex',
				flexDirection: 'row',
				// width: 108,
				backgroundColor: 'transparent',
				pl: 0,
				cursor: 'pointer',
				color: 'gs800',
				pt: '1rem',
				pb: 0,
			}}
		>
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
		</Button>
	);

export default ButtonWithIcon;
