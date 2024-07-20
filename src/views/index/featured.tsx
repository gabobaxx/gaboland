import FeaturedPostComponent from 'components/posts/featured-post-component';
import FeaturedProject from 'components/projects/featured-project';
import SectionTitle from 'components/sections/title';
import { Box } from 'theme-ui';
import { Post } from 'types';

const SectionFeatured = ({ posts }: { posts: Post[] }) => (
	<Box
		variant="layout.featured"
		sx={{ display: 'flex', flexDirection: ['column', 'row'] }}
	>
		<Box sx={{ width: ['100%', '50%'] }}>
			<SectionTitle title="Featured Project" variant="layout.card.featured" />
			<FeaturedProject title="Refribenco" instagram="refribenco">
				Company dedicated to providing refrigeration spare parts and{' '}
				<span style={{ color: '#F2C94C' }}>
					reliable technical service for refrigerators and air conditioners.
				</span>
			</FeaturedProject>
		</Box>
		<Box sx={{ width: ['100%', '50%'] }}>
			<FeaturedPostComponent posts={posts} />
		</Box>
	</Box>
);

export default SectionFeatured;
