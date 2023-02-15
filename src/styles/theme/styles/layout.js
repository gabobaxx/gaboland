export const layout = {
	containers: {
		paragraph: {
			p: {
				my: 24,
				px: 24,
				fontFamily: 'head',
				fontWeight: 'regular',
			},
		},
	},
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
		gap: 24,
		fontSize: 10,
		color: 'gs100',
		display: 'block',
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: 'FooterBackground',
		justifyContent: 'center',
		links: {
			width: '100%',
			alignItems: 'center',
			justifyContent: 'space-between',
			a: {
				color: 'GS300',
				fontSize: '18px',
				borderColor: 'GS300',
				':hover': {
					color: '#ffffff',
					borderColor: '#ffffff',
				},
			},
		},
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
	featured: {
		backgroundColor: 'FeaturedBackground',
		py: '24px',
		marginTop: '24px',
	},
	card: {
		margin: 24,
		padding: 24,
		borderRadius: 24,
		backgroundColor: 'BackgroundColorCard',
		p: {
			fontWeight: 'bold',
			'span:nth-child(1)': {
				color: 'SpanOne',
			},
			'span:nth-child(2)': {
				color: 'SpanTwo',
			},
			'span:nth-child(3)': {
				color: 'SpanThree',
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
					color: 'FontColor',
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
			borderColor: 'BorderColorOutlineButton',
			color: 'FontColorOutlineButton',
			fontWeight: 'bold',
			':hover': { color: 'primary', borderColor: 'primary' },
		},
	},
	badge: {
		display: 'flex',
		maxWidth: '250px',
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
	contact: {
		card: {
			padding: 24,
			borderRadius: 16,
			textAlign: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			backgroundColor: 'ContactCardBackgroundColor',
			header: {
				marginBottom: 2,
				fontSize: '1.5rem',
				fontWeight: 'bold',
				textAlign: 'start',
			},
			p: {
				marginBottom: 3,
				textAlign: 'center',
				fontSize: '1rem',
			},
			footer: {
				display: 'flex',
				justifyContent: 'space-between',
				a: {
					fontSize: '14px',
					color: 'FontColor',
					i: {
						marginRight: '5px',
					},
				},
			},
		},
	},
};
