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
// Sections
import Hero from '../../content/sections/hero';
import Projects from '../../content/sections/projects';
import Skills from '../../content/sections/skills';
import Experiences from '../../content/sections/experiences';
import Contact from '../../content/sections/contact';
import Test from '../../content/sections/test';

const components = {
	ProjectCard,
};

const Home = ({ children }) => {
	const meta = useSiteMetadata();
	const nav = useNavigation();
	console.log(children);
	return (
		<MDXProvider components={components}>
			<Seo />
			<Header meta={meta} nav={nav} />
			<Hero />
			<h2>Projects</h2>
			<Projects />
			<h2>Skills</h2>
			<Skills />
			<h2>Experiences</h2>
			<Experiences />
			<h2>Contact</h2>
			<Contact />
			<Test />
			<Footer />
		</MDXProvider>
	);
};

export default Home;
