import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
// * Custom
import Header from 'components/header';
import { PageNavLinks } from 'config';
import { getPosts } from 'models/posts.server';

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
			<Header links={PageNavLinks.posts} />
			<h1>Posts</h1>
			<ul>
				<li>
					<Link to="admin">Admin</Link>
				</li>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link to={post.slug}>{post.title}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
