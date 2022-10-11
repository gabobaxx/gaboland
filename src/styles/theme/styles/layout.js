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

	main: {
		position: 'relative',
	},
	container: {
		padding: 4,
		maxWidth: '5xl',
	},
};
