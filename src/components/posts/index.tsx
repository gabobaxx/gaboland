import { Flex, Paragraph } from 'theme-ui';
import Badge from 'components/badges';
import BadgeLink from 'components/badges/badge-link';

const posts = [
	{
		id: '1',
		title: 'Migrate from Gatsby to Remix',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		id: '2',
		title: 'Migrate from Gatsby to Remix',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		id: '3',
		title: 'Migrate from Gatsby to Remix',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur.',
	},
];

export default function Posts() {
	return (
		<>
			{posts.map((post) => (
				<Flex
					key={post.id}
					variant="layout.card"
					sx={{
						gap: '16px',
						flexDirection: 'column',
						// color: 'GS100',
						// backgroundColor: 'primary',
					}}
				>
					<Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
						<Paragraph sx={{ fontSize: '12px' }}>{post.title}</Paragraph>
						<Badge
							title="Tutorial"
							color={{ background: '#FCFCFC', font: 'P900' }}
						/>
					</Flex>
					<Paragraph sx={{ fontSize: '12px' }}>{post.description}</Paragraph>
					<Flex sx={{ justifyContent: 'flex-end' }}>
						<BadgeLink
							to="/posts"
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
