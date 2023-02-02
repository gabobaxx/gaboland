import { Box } from 'theme-ui';
import SectionTitle from 'components/sections/title';
import FeaturedPost from 'components/posts/featured-post';
import FeaturedProject from 'components/projects/featured-project';

const Featured = () => {
	return (
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
				<SectionTitle title="Featured Post" variant="layout.card.featured" />
				<FeaturedPost title="Migrate from Gatsby to Remix" slug="admin">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
					egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit
					amet, consectetur.
				</FeaturedPost>
			</Box>
		</Box>
	);
};
export default Featured;
