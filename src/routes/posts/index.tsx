import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
// * Custom
import Header from 'components/header';
import SectionTitle from 'components/sections/title';
import PostsComponent from 'components/posts';
import { PageNavLinks } from 'config';
import { getPosts } from 'models/posts.server';

type LoaderData = {
	posts: {
		id: string;
		description: string;
		title: string;
		slug: string;
	}[];
};

export const loader = async () => {
	const newPosts = await getPosts();
	let posts = newPosts.map((post, number) => {
		return {
			id: number.toString(),
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur',
			title: post.title,
			slug: post.slug,
		};
	});

	return json<LoaderData>({ posts });
};

export default function Posts() {
	const { posts } = useLoaderData() as LoaderData;

	return (
		<main>
			<Header links={PageNavLinks.posts} />
			<SectionTitle title="Latest Posts" icon="article" />
			<PostsComponent posts={posts} />
		</main>
	);
}
