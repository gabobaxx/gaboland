import type { NavLink } from 'types';

export const me = {
	name: 'Gabriel Bencomo',
	occupation: 'Web Developer & Solution Maker',
};

export type PageLinksType = {
	main: NavLink[];
	posts: NavLink[];
	about: NavLink[];
	default: NavLink[];
};
export const PageNavLinks: PageLinksType = {
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
			slug: '/posts',
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
			slug: '/about',
		},
		{
			title: 'Contact',
			slug: '/#contact',
		},
	],
};

export const SocialLinks = {
	linkedin: 'https://linkedin.com/in/gabrielbencomo',
	instagram: 'https://instagram.com/gabobaxx',
	twitter: 'https://twitter.com/gabobaxx',
	github: 'https://github.com/gabobaxx',
};
