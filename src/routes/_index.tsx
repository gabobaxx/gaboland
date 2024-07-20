// * Remix
import { json } from '@remix-run/node';
import { getPosts } from 'models/posts.server';
import { useLoaderData } from '@remix-run/react';
// * Sections Page
import Blog from 'views/index/blog';
import Header from 'components/header/tailwind-header';
// * Types
import type { HeadersFunction } from '@remix-run/node';
// * Utils
import { PageNavLinks } from 'config';

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

export default function Index(): JSX.Element {
	const { posts } = useLoaderData<LoaderData>();

	return (
		<main className="px-6">
			<Header links={PageNavLinks.about} />
			<Blog post={posts[4]} />
		</main>
	);
}
