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
	markdown: string;
};

const postsCache: Post[] = [];

export async function getPosts(): Promise<Array<Post>> {
	const database = await notion.databases.query({
		database_id: blogDatabaseId,
	});

	const posts = database.results as PageObjectResponse[];

	return posts.map((post) => {
		const postForCache = {
			id: post.id,
			slug: post.id,
			title: post.properties.Name.title[0].plain_text,
			markdown: '',
		};

		postsCache.push(...postsCache, postForCache);

		return postForCache;
	});
}

export async function getPost(slug: string) {
	const n2m = new NotionToMarkdown({ notionClient: notion });

	const page = (await notion.pages.retrieve({
		page_id: slug,
	})) as PageObjectResponse;

	const mdblocks = await n2m.pageToMarkdown(page.id);
	const mdString = n2m.toMarkdownString(mdblocks);

	const name = page.properties.Name.title[0].plain_text;

	const post: Post = {
		id: page.id,
		slug: page.id,
		title: page.properties.Name.title[0].plain_text,
		markdown: mdString,
	};
	return post;
}
