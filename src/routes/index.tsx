import { Fragment } from 'react';
import { Box, Flex } from 'theme-ui';
import { Link as RLink } from '@remix-run/react';
// * Custom Components
import Hero from 'components/hero';
import Header from 'components/header';
import Link from 'components/links';
import SectionTitle from 'components/sections/title';
import Featured from 'components/featured';

import Projects from 'components/projects';
import Posts from 'components/posts';

/**
 * * Header
 * * Hero
 * * Featured -> Project & Post
 * * More Posts
 * * More Projects
 * ? Footer
 */

import { defaultLinks } from 'config';
export default function Index() {
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
		</Fragment>
	);
}
