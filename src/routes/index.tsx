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
// import Projects from 'components/projects';
import SectionTitle from 'components/sections/title';
import FooterSocialLinks from 'components/footer/social-links';
import { SocialLinksBadges } from 'components/links/social-links-badges';
import FeaturedProject from 'components/projects/featured-project';
import FeaturedPostComponent from 'components/posts/featured-post-component';
// * Config
import { json } from '@remix-run/node';
import { getPosts } from 'models/posts.server';
import { PageNavLinks, me as gabriel } from 'config';
import type { HeadersFunction } from '@remix-run/node';

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

			<Box
				variant="layout.featured"
				sx={{ display: 'flex', flexDirection: ['column', 'row'] }}
			>
				<Box sx={{ width: ['100%', '50%'] }}>
					<SectionTitle
						title="Featured Project"
						variant="layout.card.featured"
					/>
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

			{posts.length > 0 ? (
				<>
					<SectionTitle title="More Posts" icon="article" />
					<Posts posts={posts} />
				</>
			) : (
				''
			)}

			<Contact />
			<Footer>
				<FooterSocialLinks />
			</Footer>
		</Fragment>
	);
}
