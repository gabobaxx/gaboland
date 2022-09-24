/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
// Providers!
import { MDXProvider } from '@mdx-js/react';
// Hooks!
import useNavigation from '@lekoarts/gatsby-theme-emma/src/hooks/use-navigation';
import useSiteMetadata from '@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata';

// Third Party Components!
import { Box } from 'theme-ui';
// Custom Components!
import CardContact from 'components/cards/contact-card';

import Seo from '../@lekoarts/gatsby-theme-emma/components/seo';
import Footer from '@lekoarts/gatsby-theme-emma/components/footer';
import Header from '@lekoarts/gatsby-theme-emma/src/components/header';
// Sections
import {
	HeroSection as Hero,
	ContactSection as Contact,
	ExperiencesSection as Experiences,
	ProjectsSection as Projects,
	SkillsSection as Skills,
} from 'sections/home';

const components = {
	CardContact,
};

const Home = () => {
	const meta = useSiteMetadata();
	const nav = useNavigation();
	return (
		<MDXProvider components={components}>
			<Seo />
			<Header meta={meta} nav={nav} />
			<Box
				as="main"
				sx={{
					display: 'grid',
					gridGap: '3rem',
					maxWidth: 720,
					margin: '0 auto',
					padding: '0 24px',
				}}
			>
				<Hero />
				<Projects />
				<Skills />
				<Experiences />
				<Contact />
			</Box>
			<Footer />
		</MDXProvider>
	);
};

export default Home;
