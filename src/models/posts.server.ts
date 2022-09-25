export type Post = {
	slug: string;
	title: string;
	markdown: string;
};

const posts = [
	{
		slug: 'my-first-post',
		title: 'My First Post',
		markdown: '### This is amazing',
	},
	{
		slug: '90s-mixtape',
		title: 'A Mixtape I Made Just For You',
		markdown: 'This is amazing',
	},
];

export async function getPosts(): Promise<Array<Post>> {
	return posts;
}

export async function getPost(slug: string) {
	return posts.find((post) => post.slug === slug);
}

export async function createPost(post: Post) {
	return posts.push(post);
}
