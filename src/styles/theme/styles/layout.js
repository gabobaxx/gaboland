export const layout = {
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
	header: {
		my: 24,
		px: [48, 50] /* [phone, desktop] */,
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		fontFamily: 'head',
		fontWeight: 'bold',
		a: {
			color: 'HeaderText',
			':hover': { color: 'P300', textDecoration: 'none' },
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
