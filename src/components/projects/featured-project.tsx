import { Flex, Paragraph } from 'theme-ui';
import Badge from 'components/badges';
import BadgeLink from 'components/badges/badge-link';
import type { ReactNode } from 'react';

type FeaturedProjectProps = {
	title: string;
	instagram: string;
	children: ReactNode;
};
const FeaturedProject = ({
	title,
	instagram,
	children,
}: FeaturedProjectProps) => {
	return (
		<Flex
			variant="layout.card"
			sx={{
				gap: '16px',
				color: 'GS100',
				flexDirection: 'column',
				backgroundColor: 'FeaturedProjectBackground',
			}}
		>
			<Flex sx={{ justifyContent: 'space-between' }}>
				<h2>{title.toUpperCase()}</h2>
				<Badge title="Cofounder" icon="yingyang" />
			</Flex>
			<Paragraph sx={{ fontSize: '18px' }}>{children}</Paragraph>
			<Flex sx={{ justifyContent: 'flex-end' }}>
				<BadgeLink
					icon="instagram"
					title="Instagram"
					href={`https://instagram.com/${instagram}`}
					color={{ background: 'GS100', font: 'P900' }}
					hover={{ background: 'GS100', color: 'primary' }}
				/>
			</Flex>
		</Flex>
	);
};

export default FeaturedProject;
