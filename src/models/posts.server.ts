import { Client } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
const { NotionToMarkdown } = require('notion-to-md');

const NOTION_KEY = process.env.NOTION_KEY;
const blogDatabaseId = process.env.NOTION_POSTS_DATABASE_ID || '';
const notion = new Client({ auth: NOTION_KEY });

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
	featured: boolean;
};

export async function getPosts(): Promise<Array<Post>> {
	const database = await notion.databases.query({
		database_id: blogDatabaseId,
	});

	const posts = database.results as PageObjectResponse[];
	return posts.map((post) => {
		const tags = post.properties.Tags.multi_select;
		const featured = tags.map((tag) => tag.name === 'Featured');
		return {
			id: post.id,
			slug: post.id,
			title: post.properties.Name.title[0].plain_text,
			description: post.properties.Description.rich_text[0].plain_text,
			markdown: '',
			tags,
			featured,
		};
	});
}

export async function getPost(slug: string) {
	const n2m = new NotionToMarkdown({ notionClient: notion });

	const page = (await notion.pages.retrieve({
		page_id: slug,
	})) as PageObjectResponse;

	const mdblocks = await n2m.pageToMarkdown(page.id);
	const mdString = n2m.toMarkdownString(mdblocks);

	const tags = page.properties.Tags.multi_select;
	const featured = tags.map((tag) => tag.name === 'Featured');

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
