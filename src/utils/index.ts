import type { AvailableIcons } from 'types';

export const linkedin = 'https://linkedin.com/in/gabrielbencomo';
export const twitter = 'https://twitter.com/gabrielbca15';
export const github = 'https://github.com/gabrielba15';

export const getIconClass = (icon: AvailableIcons) => {
	const IconClasses = {
		cpu: 'bi bi-cpu-fill',
		laptop: 'bi bi-laptop',
		star: 'bi bi-star-fill',
		article: 'bi bi-newspaper',
		yingyang: 'bi bi-yin-yang',
		instagram: 'bi bi-instagram',
		laptopFill: 'bi bi-laptop-fill',
		twitter: 'bi bi-twitter',
		linkedin: 'bi bi-linkedin',
		github: 'bi bi-github',
	};

	return IconClasses[icon];
};

/**
 * This function receives a word
 * and returns that word with the first
 * letter capitalized (uppercase).
 * Exmaple: 'icon' => 'Icon'
 * @param word string
 * @returns string
 */
export const capitalize = (word: string) =>
	word.charAt(0).toUpperCase() + word.slice(1);
