import SectionTitle from 'components/sections/title';
import FeaturedPost from './featured-post';

const FeaturedPostComponent = ({ posts }: { posts: any[] }) => {
	if (posts.length > 0) {
		return (
			<>
				{posts.map((post: any) => {
					if (post.featured[1]) {
						return (
							<>
								<SectionTitle
									title="Featured Post"
									variant="layout.card.featured"
								/>
								<FeaturedPost title={post.title} slug={post.slug}>
									{post.description}
								</FeaturedPost>
							</>
						);
					}
					return <></>;
				})}
			</>
		);
	}

	return (
		<>
			<SectionTitle title="Featured Post" variant="layout.card.featured" />
			<FeaturedPost title="Whitout Featured Post Yet..." slug="posts">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
				egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit
				amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
				elit. Faucibus egestas vitae.
			</FeaturedPost>
		</>
	);
};

export default FeaturedPostComponent;
