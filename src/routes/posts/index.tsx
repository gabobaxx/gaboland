import type { HeadersFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
// * Custom
import Header from 'components/header/tailwind-header';
import SectionTitle from 'components/sections/title-with-star';
import PostComponent from 'components/posts/post-component-tailwind';
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
		<main className="px-6">
			<Header links={PageNavLinks.posts} />
			<SectionTitle className="my-6">Ultimos Articulos</SectionTitle>
			<div className="grid gap-6 md:grid-cols-2">
				{posts.map((post) => (
					<PostComponent post={post} key={post.id} />
				))}
			</div>
		</main>
	);
}
