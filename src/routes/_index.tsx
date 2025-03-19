// * Remix
import { json } from '@remix-run/node';
import { getPosts } from 'models/posts.server';
import { useLoaderData } from '@remix-run/react';
// * Section Page
import Hero from 'views/index/hero';
import Blog from 'views/index/blog';
import Projects from 'views/index/projects';
import Header from 'components/header/tailwind-header';
// * Utils & Types
import { PageNavLinks } from 'config';
import type { HeadersFunction } from '@remix-run/node';

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

export default function Index() {
	const { posts } = useLoaderData<LoaderData>();

	return (
		<main className="px-6">
			<Header links={PageNavLinks.main} />
			<div className="grid lg:gap-6 lg:grid-cols-3">
				<div>
					<Blog post={posts[0]} />
				</div>
				<div className="lg:col-start-3">
					<Projects />
				</div>
				<div className="lg:row-[1/2] lg:col-start-2">
					<Hero />
				</div>
			</div>
		</main>
	);
}
