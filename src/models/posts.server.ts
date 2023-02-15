import { Client } from '@notionhq/client';

import type { Post, NotionResponse } from 'types';
const { NotionToMarkdown } = require('notion-to-md');

const NOTION_KEY = process.env.NOTION_KEY;
const notion = new Client({ auth: NOTION_KEY });
const blogDatabaseId = process.env.NOTION_POSTS_DATABASE_ID || '';

export async function getPosts(): Promise<Array<Post>> {
	const database = await notion.databases.query({
		database_id: blogDatabaseId,
	});

	const posts = database.results as NotionResponse;
	return posts.map((post) => {
		return {
			id: post.id,
			slug: post.id,
			title: post.properties.Name.title[0].plain_text,
			description: post.properties.Description.rich_text[0].plain_text,
			markdown: '',
			tags: post.properties.Tags.multi_select,
			featured: post.properties.Tags.multi_select.map(
				(tag) => tag.name === 'Featured'
			),
		};
	});
}

export async function getPost(slug: string) {
	const n2m = new NotionToMarkdown({ notionClient: notion });

	const page = (await notion.pages.retrieve({
		page_id: slug,
	})) as any;

	const mdblocks = await n2m.pageToMarkdown(page.id);
	const mdString = n2m.toMarkdownString(mdblocks);

	const tags = page.properties.Tags.multi_select;
	const featured = tags.map((tag: any) => tag.name === 'Featured');

	const post: Post = {
		id: page.id,
		slug: page.id,
		title: page.properties.Name.title[0].plain_text,
		description: page.properties.Description.rich_text[0].plain_text,
		markdown: mdString,
		featured,
		tags,
	};
	return post;
}
