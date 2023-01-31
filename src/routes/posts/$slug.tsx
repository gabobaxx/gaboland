// * Remix/React Packages
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
// * Third Party Packages
import { marked } from 'marked';
import invariant from 'tiny-invariant';
// * Custom Packages
import { getPost } from 'models/posts.server';
// * Types/Interfaces
import type { LoaderFunction } from '@remix-run/node';
import type { Post } from 'models/posts.server';
import Header from 'components/header';

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
	invariant(params.slug, 'params.slug is required');
	const post = await getPost(params.slug);
	invariant(post, () => {
		throw json(
			{
				route: 'posts',
				slug: '/posts',
			},
			{
				status: 404,
				statusText: 'Post Not Found',
			}
		);
	});
	const html = marked(post.markdown);
	return json<LoaderData>({ post, html });
	// return json({ posts: true });
};

export default function PostSlug() {
	const { post, html } = useLoaderData() as LoaderData;

	return (
		<main>
			<Header />
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: html }} />
			{/* POST */}
		</main>
	);
}
