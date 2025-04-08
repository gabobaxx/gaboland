import Posts from 'components/posts';
import SectionTitle from 'components/sections/title';
import { Post } from 'types';

const SectionMorePosts = ({ posts }: { posts: Post[] }) => {
	if (posts.length <= 0) return <></>;

	return (
		<>
			<SectionTitle title="More Posts" icon="article" />
			<Posts posts={posts} />
		</>
	);
};

export default SectionMorePosts;
