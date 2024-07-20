import { SocialLinksBadges } from 'components/links/social-links-badges';
import { Box, Flex } from 'theme-ui';
import Link from 'components/links';
import { Link as RLink } from '@remix-run/react';

const SectionExtra = () => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '600px',
			margin: '0 auto',
		}}
	>
		<Flex
			sx={{
				margin: 24,
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<SocialLinksBadges hidden={{ render: ['instagram'] }} />
		</Flex>
		<Box variant="layout.card">
			<p style={{ fontSize: '24px' }}>
				<span>Also, I’m an engineer</span> who loves to contribute{' '}
				<span>to the growth</span> and <span>advancement of civilization.</span>
			</p>
			<p style={{ fontSize: '20px', marginTop: 32 }}>
				Remember, <span>make solutions and stay away</span> from problems.
			</p>
		</Box>
		<Flex sx={{ justifyContent: 'center' }}>
			<Link as={RLink} to="/posts" variant="layout.button.outline">
				Blog
			</Link>
		</Flex>
	</Box>
);

export default SectionExtra;
