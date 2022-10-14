export const layout = {
	header: {
		my: 24,
		px: 24,
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		fontFamily: 'head',
		fontWeight: 'bold',
		a: {
			fontSize: [14, 18] /* [phone, desktop] */,
			color: 'HeaderText',
			':hover': { color: 'P300', textDecoration: 'none' },
		},
	},
	footer: {
		py: 20,
		px: 24,
		fontSize: 10,
		color: 'gs100',
		display: 'block',
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: 'red',
	},
	hero: {
		gap: 16,
		gridColumn: '1/-1',
		alignItems: 'center',
		flexDirection: 'column',
		h2: { fontSize: [40, 50] },
		h4: { fontSize: [18, 24], fontWeight: 'regular' },
		h5: { fontSize: [18, 24], fontWeight: 'regular', margin: 0 },
	},
	card: {
		margin: 24,
		padding: 24,
		borderRadius: 24,
		backgroundColor: 'BackgroundColorCard',
		p: {
			fontWeight: 'bold',
			span: {
				color: 'P900',
			},
		},
		featured: {
			margin: 24,
			padding: 24,
			borderRadius: 24,
			backgroundColor: 'BackgroundColorCardFeatured',
			p: {
				fontWeight: 'bold',
				span: {
					color: 'P900',
				},
			},
		},
	},
	button: {
		outline: {
			py: '8px',
			px: [48, 64],
			borderRadius: 8,
			border: '2px solid',
			borderColor: 'P900',
			color: 'P900',
			fontWeight: 'bold',
			':hover': { color: 'primary', borderColor: 'primary' },
		},
	},
	badge: {
		py: '8px',
		px: '16px',
		gap: '8px',
		borderRadius: 24,
		alignItems: 'center',
		i: { fontSize: '12px' },
		p: {
			fontSize: '10px',
			fontWeight: 'bold',
			span: { color: 'P900' },
		},
		a: {
			color: 'P900',
			fontSize: '10px',
			fontWeight: 'bold',
			':hover': { textDecoration: 'none' },
		},
	},

	main: {
		position: 'relative',
	},
	container: {
		padding: 4,
		maxWidth: '5xl',
	},
};
