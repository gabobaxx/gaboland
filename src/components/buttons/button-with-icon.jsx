import * as React from 'react';
import {Box, Button} from 'theme-ui';

const ButtonWithIcon = ({children, side = 'left', icon}) =>
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
				pb: 0

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
