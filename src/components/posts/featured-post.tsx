import type { ReactNode } from 'react';
import { Flex, Paragraph } from 'theme-ui';

import Badge from 'components/badges';
import BadgeLink from 'components/badges/badge-link';

type FeaturedPostProps = {
	title: string;
	slug: string;
	children: ReactNode;
};

const FeaturedPost = ({ title, slug, children }: FeaturedPostProps) => {
	return (
		<Flex
			variant="layout.card"
			sx={{
				gap: '16px',
				flexDirection: 'column',
				backgroundColor: 'FeaturedPostBackground',
			}}
		>
			<Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
				<Paragraph sx={{ fontSize: '18px' }}>{title}</Paragraph>
				<Badge
					title="Tutorial"
					color={{ background: '#F7F7F7', font: 'P900' }}
				/>
			</Flex>
			<Paragraph sx={{ fontSize: '15px' }}>{children}</Paragraph>
			<Flex sx={{ justifyContent: 'flex-end' }}>
				<BadgeLink
					icon="article"
					title="Read Post"
					to={slug}
					color={{ background: 'GS100', font: 'P900' }}
					hover={{ background: 'GS100', color: 'primary' }}
				/>
			</Flex>
		</Flex>
	);
};

export default FeaturedPost;
