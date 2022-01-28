export const cards = {
	// mt: 24,
	padding: 24,
	display: 'flex',
	borderRadius: 20,
	border: '2px solid',
	alignItems: 'center',
	justifyContent: 'center',
	large: {
		height: 255,
		maxWidth: 366,
		p: {
			textAlign: 'center',
			fontSize: '0.8125rem',
		},
		header: {
			mb: 2,
			color: 'gs800',
			fontSize: '1.5rem',
			fontWeight: 'bold',
			textAlign: 'start',
		},
		footer: {
			display: 'flex',
			justifyContent: 'space-between',
		},
		content: {
			height: 207,
			maxWidth: 314,
			color: 'gs700',
			display: 'flex',
			overflow: 'hidden',
			flexDirection: 'column',
			justifyContent: 'space-evenly',
		},
	},
	small: {
		//height: 149,
		maxWidth: 366,
		content: {
			textAlign: 'start',
			width: 318,
			overflow: 'hidden',
		},
		footer: {
			mt: '0.5rem',
		},
	},
};
