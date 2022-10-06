export const styles = {
	root: {
		color: 'gs800',
		boxSizing: 'border-box',
		MozOsxFontSmoothing: 'grayscale',
		WebkitFontSmoothing: 'antialiased',
		textRendering: 'optimizeLegibility',
	},
	p: {
		fontSize: [1, 2],
		lineHeight: 'body',
		letterSpacing: '-0.003em',
		gridColumn: '1/-1',
		'--x-height-multiplier': 0.35,
		'--baseline-multiplier': 0.179,
	},
	h1: {
		fontSize: [5, 6],
		mt: 2,
		gridColumn: '1/-1',
	},
	h2: {
		mt: 2,
		fontSize: [20, 30],
		fontFamily: 'head',
		fontWeight: 'bold',
		textAlign: 'start',
		gridColumn: '1/-1',
	},
	h3: {
		fontSize: [3, 4],
		mt: 3,
		gridColumn: '1/-1',
	},
	h4: {
		fontSize: [2, 3],
		gridColumn: '1/-1',
	},
	h5: {
		fontSize: [1, 2],
		gridColumn: '1/-1',
	},
	h6: {
		fontSize: 1,
		mb: 2,
		gridColumn: '1/-1',
	},
};
