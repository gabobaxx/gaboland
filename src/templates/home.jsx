import * as React from 'react';
// Providers!
import { MDXProvider } from '@mdx-js/react';

// Hooks!
import useSiteMetadata from '@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata';
import useNavigation from '@lekoarts/gatsby-theme-emma/src/hooks/use-navigation';
// Components!
import Header from '@lekoarts/gatsby-theme-emma/src/components/header';
import Footer from '../@lekoarts/gatsby-theme-emma/components/footer';
import Seo from '@lekoarts/gatsby-theme-emma/src/components/seo';
import ProjectCard from '../components/project-card.tsx';
import Card, { CardVertical } from '../components/cards/card';
import { Image, Card as CardUI, Flex } from 'theme-ui';

// Sections
import Hero from '../../content/sections/hero';
import Projects from '../../content/sections/projects';
import Skills from '../../content/sections/skills';
import Experiences from '../../content/sections/experiences';
import Contact from '../../content/sections/contact';

const components = {
	ProjectCard,
};

const Home = () => {
	const meta = useSiteMetadata();
	const nav = useNavigation();
	return (
		<MDXProvider components={components}>
			<Seo />
			<Header meta={meta} nav={nav} />
			<main className="container">
				<CardUI
					sx={{
						width: 200,
						mx: 'auto',
						pt: 60,
					}}
				>
					<Image
						as={Image}
						sx={{
							borderRadius: '50%',
							width: 200,
							height: 200,
						}}
						src="me.jpg"
						alt="Selfie Of Me"
					/>
				</CardUI>
				<Flex
					sx={{
						flexDirection: 'column',
						textAlign: 'center',
						mb: 60,
					}}
				>
					<Hero />
				</Flex>
				<h2>Projects</h2>
				<Flex
					sx={{
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
					}}
				>
					<Projects />
					<CardVertical title="Gaboland">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
					<CardVertical title="Gaboland">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
					<CardVertical title="Gaboland">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
				</Flex>
				<h2>Skills</h2>
				<Flex
					sx={{
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
					}}
				>
					<Skills />
					<CardVertical title="Gaboland">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
					<CardVertical title="Gaboland">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
					<CardVertical title="Gaboland">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
				</Flex>
				<h2>Experiences</h2>
				<Flex
					sx={{
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
					}}
				>
					<Experiences />
					<CardVertical title="Gaboland">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
					<CardVertical title="Gaboland">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
					<CardVertical title="Gaboland">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
				</Flex>
				<h2>Contact</h2>
				<Flex
					sx={{
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
					}}
				>
					<Contact />
					<Card />
					<Card />
				</Flex>
			</main>
			<Footer />
		</MDXProvider>
	);
};

export default Home;
