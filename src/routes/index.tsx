// * Third Party
import { Fragment } from 'react';
import { Box, Flex } from 'theme-ui';
import { Link as RLink } from '@remix-run/react';
// * Custom Components
import Hero from 'components/hero';
import Link from 'components/links';
import Posts from 'components/posts';
import Header from 'components/header';
import Footer from 'components/footer';
import Featured from 'components/featured';
import Projects from 'components/projects';
import SectionTitle from 'components/sections/title';
// * Config
import { defaultLinks } from 'config';

export default function Index(): JSX.Element {
	return (
		<Fragment>
			<Header links={defaultLinks.main} />
			<Hero
				name="Gabriel Bencomo"
				occupation="Web Developer & Solution Maker"
			/>
			<Box variant="layout.card">
				<p style={{ fontSize: '24px' }}>
					<span>Also, I’m an engineer</span> who loves to contribute{' '}
					<span>to the growth</span> and advancement of civilization.
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
			<Featured />
			<SectionTitle title="More Posts" icon="article" />
			<Posts />
			<SectionTitle title="More Projects" icon="cpu" />
			<Projects />
			<Footer />
		</Fragment>
	);
}
