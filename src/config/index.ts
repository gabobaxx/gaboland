import type { NavLink } from 'types';

export const navLinks: Array<NavLink> = [
	{
		title: 'Gaboland',
		slug: '/',
	},
	{
		title: 'About',
		slug: 'about',
	},
	{
		title: 'Posts',
		slug: 'posts',
	},
];

export const defaultLinks = {
	default: [{ title: 'Home', slug: '/' }],
	main: navLinks,
};

export const PageLinks = {
	default: [{ title: 'Home', slug: '/' }],
	main: [
		{
			title: 'Gaboland',
			slug: '/',
		},
		{
			title: 'About',
			slug: 'about',
		},
		{
			title: 'Posts',
			slug: 'posts',
		},
	],
	about: [
		{
			title: 'Gaboland',
			slug: '/',
		},
		{
			title: 'Posts',
			slug: 'posts',
		},
		{
			title: 'Contact',
			slug: '/#contact',
		},
	],
	posts: [
		{
			title: 'Gaboland',
			slug: '/',
		},
		{
			title: 'About',
			slug: 'about',
		},
		{
			title: 'Contact',
			slug: '/#contact',
		},
	],
};

export const SocialLinks = {
	linkedin: 'https://linkedin.com/in/gabrielbencomo',
	instagram: 'https://instagram.com/gabrielba15',
	twitter: 'https://twitter.com/gabrielbca15',
	github: 'https://github.com/gabrielba15',
};
