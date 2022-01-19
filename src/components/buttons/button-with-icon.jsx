import * as React from 'react';
import { Box, Button } from 'theme-ui';

const ButtonWithIcon = ({ icon }) => (
	<Button
		sx={{
			display: 'flex',
			flexDirection: 'row',
			width: 108,
			backgroundColor: 'transparent',
			pl: 0,
			cursor: 'pointer',
			color: 'gs800',
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
			{icon.charAt(0).toUpperCase() + icon.slice(1)}
		</Box>
	</Button>
);

export default ButtonWithIcon;
