import type { HeadersFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
// * Custom
import Header from 'components/header';
import SectionTitle from 'components/sections/title';
import PostsComponent from 'components/posts';
import { PageNavLinks } from 'config';
import { getPosts } from 'models/posts.server';

type LoaderData = {
	posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
	return json<LoaderData>({ posts: await getPosts() });
};

export const headers: HeadersFunction = () => {
	return {
		'Cache-Control':
			'public, max-age=60, s-maxage=3604, stale-while-revalidate=60',
	};
};
export default function Posts() {
	const { posts } = useLoaderData() as LoaderData;

	return (
		<main>
			<Header links={PageNavLinks.posts} />
			<SectionTitle title="Latest Posts" icon="article" />
			{posts.length > 0 ? (
				<PostsComponent posts={posts} />
			) : (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<h2>Without Posts Yet...</h2>
				</div>
			)}
		</main>
	);
}
