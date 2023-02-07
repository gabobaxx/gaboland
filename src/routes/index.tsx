// * Third Party
import { Fragment } from 'react';
import { Box, Flex } from 'theme-ui';
import { Link as RLink, useLoaderData } from '@remix-run/react';
// * Custom Components
import Hero from 'components/hero';
import Link from 'components/links';
import Posts from 'components/posts';
import Header from 'components/header';
import Footer from 'components/footer';
import Contact from 'components/contact';
import Featured from 'components/featured';
// import Projects from 'components/projects';
import SectionTitle from 'components/sections/title';
import FooterSocialLinks from 'components/footer/social-links';
import { SocialLinksBadges } from 'components/links/social-links-badges';
// * Config
import { PageNavLinks, me as gabriel } from 'config';
import type { HeadersFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getPosts } from 'models/posts.server';

type LoaderData = {
	posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
	return json<LoaderData>({ posts: await getPosts() });
};

export const headers: HeadersFunction = () => {
	return {
		'Cache-Control':
			'public, max-age=60, s-maxage=3604, stale-while-revalidate=60',
	};
};

export default function Index(): JSX.Element {
	const { posts } = useLoaderData() as LoaderData;
	return (
		<Fragment>
			<Header links={PageNavLinks.main} />
			<Hero name={gabriel.name} occupation={gabriel.occupation} />
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
						<span>to the growth</span> and{' '}
						<span>advancement of civilization.</span>
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

			<Featured />
			<SectionTitle title="More Posts" icon="article" />
			<Posts posts={posts} />
			<Contact />
			<Footer>
				<FooterSocialLinks />
			</Footer>
		</Fragment>
	);
}
