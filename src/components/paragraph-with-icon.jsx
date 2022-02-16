import * as React from 'react';
import { Box } from 'theme-ui';

const ParagraphWithIcon = ({ text = 'Arch Linux', icon = 'bank' }) => (
	<Box
		as="p"
		sx={{
			textAlign: 'start',
			px: '0.3125rem',
			my: '1rem',
			color: 'gs900',
			fontFamily: 'Manrope',
			fontWeight: 'light',
			fontSize: '1rem',
			fontStyle: 'normal',
		}}
	>
		{icon === 'figma' ? (
			<img
				alt="Figma"
				src="/Figma.svg"
				width="16"
				height="16"
				style={{ marginRight: 8 + 'px' }}
			/>
		) : (
			<i
				style={{
					marginRight: 8 + 'px',
					color: icon === 'spotify' ? '#1DB954' : '',
				}}
				className={'bi bi-' + icon}
			></i>
		)}
		{text}
	</Box>
);

export default ParagraphWithIcon;
