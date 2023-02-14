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

export type Post = {
	id: string;
	slug: string;
	title: string;
	description: string;
	markdown: string;
	tags: [
		{
			id: string;
			name: string;
			color: string;
		}
	];
	featured: boolean[];
};

export type NotionResponse = {
	object: 'page';
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: { object: 'user'; id: string };
	last_edited_by: {
		object: 'user';
		id: string;
	};
	cover: null | string;
	icon: null | string;
	parent: {
		type: 'database_id';
		database_id: string;
	};
	archived: boolean;
	properties: {
		Description: { id: string; type: string; rich_text: [any] };
		Tags: { id: string; type: string; multi_select: [any] };
		Name: { id: string; type: string; title: [any] };
	};
	url: string;
}[];
