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
