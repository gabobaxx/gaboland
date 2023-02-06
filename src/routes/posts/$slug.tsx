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

import { Box, Heading } from 'theme-ui';

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
};

export default function PostSlug() {
	const { post, html } = useLoaderData() as LoaderData;

	return (
		<main>
			<Header
				links={[
					{
						title: 'Gaboland',
						slug: '/',
					},
					{
						title: 'Posts',
						slug: '/posts',
					},
					{
						title: 'About',
						slug: '/about',
					},
				]}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					maxWidth: '800px',
					margin: '0 auto',
					padding: '24px',
				}}
			>
				<Heading sx={{ fontSize: ['2rem', '3rem'] }}>{post.title}</Heading>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</Box>
		</main>
	);
}
