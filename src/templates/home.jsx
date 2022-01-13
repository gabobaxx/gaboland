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
					<CardVertical title="Gaboland" borderColor="success">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</CardVertical>
					<CardVertical title="Giffy">
						Gifs App using React, Styled Components and consuming giphy api.
					</CardVertical>
					<CardVertical title="PHP & MYSQL Parcial" borderColor="success">
						CRUD App using PHP, MySQL and Bootstrap for a university assessment.
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
					<CardVertical title="Programming">
						My life as a programmer started in 2019. I have 3 years of
						experiences and I’m still learning.
					</CardVertical>
					<CardVertical title="Design" borderColor="success">
						I have 2 year designing and learning technologies associeted with it
						and I still don’t stop.
					</CardVertical>
					<CardVertical title="Autodidact">
						since 2017 I haven’t stopped learning somenthing new every single
						day.
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
					<Card title="Work Contact">
						If you are an entrepreneur or somebody who are looking for someone
						who develop your app or website, you can contact me from 8:00h to
						11:00h and from 15:00h to 18:h ET. for an immediate response.
					</Card>
					<Card title="Friendly Contact">
						If you’re an old friend or a stranger who wants to contact me for
						anything (say hello, connection, etc.) write at any tiime through
						the media but do not expect an immediate response.
					</Card>
				</Flex>
			</main>
			<Footer />
		</MDXProvider>
	);
};

export default Home;
