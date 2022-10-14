export const linkedin = 'https://linkedin.com/in/gabrielbencomo';
export const twitter = 'https://twitter.com/gabrielbca15';
export const github = 'https://github.com/gabrielba15';

export const getIconClass = (IconProps: string) => {
	const IconClasses = {
		cpu: 'bi bi-cpu-fill',
		laptop: 'bi bi-laptop',
		star: 'bi bi-star-fill',
		article: 'bi bi-newspaper',
		yingyang: 'bi bi-yin-yang',
		instagram: 'bi bi-instagram',
		laptopFill: 'bi bi-laptop-fill',
	};
	const classFound = Object.entries(IconClasses).find((icon) =>
		icon[0] === IconProps ? icon[1] : null
	);

	if (classFound === undefined)
		throw new Error(`"${IconProps}" icon not allowed`);
	return classFound[1];
};
