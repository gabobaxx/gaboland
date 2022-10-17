export const linkedin = 'https://linkedin.com/in/gabrielbencomo';
export const twitter = 'https://twitter.com/gabrielbca15';
export const github = 'https://github.com/gabrielba15';

type AvailableIcons =
	| 'cpu'
	| 'star'
	| 'laptop'
	| 'article'
	| 'yingyang'
	| 'instagram'
	| 'laptopFill';

export const getIconClass = (icon: AvailableIcons) => {
	const IconClasses = {
		cpu: 'bi bi-cpu-fill',
		laptop: 'bi bi-laptop',
		star: 'bi bi-star-fill',
		article: 'bi bi-newspaper',
		yingyang: 'bi bi-yin-yang',
		instagram: 'bi bi-instagram',
		laptopFill: 'bi bi-laptop-fill',
	};

	return IconClasses[icon];
};
