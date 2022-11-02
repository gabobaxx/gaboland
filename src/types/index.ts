import type { ReactNode, CSSProperties } from 'react';

export type NavLink = {
	title: string;
	slug: string;
};

export type AvailableIcons =
	| 'cpu'
	| 'star'
	| 'laptop'
	| 'article'
	| 'yingyang'
	| 'instagram'
	| 'laptopFill'
	| 'twitter'
	| 'linkedin'
	| 'github';

export type ComponentProps = {
	children: ReactNode;
	sx?: CSSProperties;
};
