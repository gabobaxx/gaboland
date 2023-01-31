import { Flex, Paragraph } from 'theme-ui';
import Badge from 'components/badges';
import BadgeLink from 'components/badges/badge-link';

const postsArray = [
	{
		id: '1',
		title: 'Blog Post For Test',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur.',
		slug: '/posts',
	},
];

export default function Posts({ posts }: { posts?: typeof postsArray }) {
	const array = posts ?? postsArray;
	return (
		<>
			{array.map((post) => (
				<Flex
					key={post.id}
					variant="layout.card"
					sx={{
						gap: '16px',
						flexDirection: 'column',
					}}
				>
					<Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
						<Paragraph sx={{ fontSize: '16px', width: 200 }}>
							{post.title}
						</Paragraph>
						<Badge
							title="Tutorial"
							color={{ background: '#FCFCFC', font: 'P900' }}
						/>
					</Flex>
					<Paragraph sx={{ fontSize: '12px' }}>{post.description}</Paragraph>
					<Flex sx={{ justifyContent: 'flex-end' }}>
						<BadgeLink
							to={post.slug}
							icon="article"
							title="Read Post"
							color={{ background: '#FCFCFC', font: 'P900' }}
							hover={{ background: 'GS100', color: 'primary' }}
						/>
					</Flex>
				</Flex>
			))}
		</>
	);
}
