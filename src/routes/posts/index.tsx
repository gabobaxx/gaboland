import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { getPosts } from 'models/posts.server';

import Header from 'components/header';

type LoaderData = {
	posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
	return json<LoaderData>({
		posts: await getPosts(),
	});
};

export default function Posts() {
	const { posts } = useLoaderData() as LoaderData;

	return (
		<main>
			<Header />
			<h1>Posts</h1>

			<ul>
				<li>
					<Link to="admin" className="text-red-600 underline">
						Admin
					</Link>
				</li>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link to={post.slug} className="text-blue-600 underline">
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
