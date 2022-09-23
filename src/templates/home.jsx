/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
// Providers!
import { MDXProvider } from '@mdx-js/react';
// Hooks!
import useNavigation from '@lekoarts/gatsby-theme-emma/src/hooks/use-navigation';
import useSiteMetadata from '@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata';

// Third Party Components!
import { Flex, Box } from 'theme-ui';
// Custom Components!
import SkillCard from 'components/cards/skill-card';
import CardContact from 'components/cards/contact-card';
import ExperienceCard from 'components/cards/experience-card';
import ProjectCard from 'components/cards/project-card';
import Seo from '../@lekoarts/gatsby-theme-emma/components/seo';
import Footer from '@lekoarts/gatsby-theme-emma/components/footer';
import Header from '@lekoarts/gatsby-theme-emma/src/components/header';
import Hero from 'components/hero';
// Sections
import Skills from '../../content/sections/skills';
import Contact from '../../content/sections/contact';
import Projects from '../../content/sections/projects';
import Experiences from '../../content/sections/experiences';
import HeroContent from '../../content/sections/hero';

import SectionLinks from 'components/links/section-links';

const linkedin = 'https://linkedin.com/in/gabrielbencomo';
const twitter = 'https://twitter.com/gabrielbca15';
const github = 'https://github.com/gabrielba15';

const components = {
	CardContact,
};

const FlexContent = ({ children }) => (
	<Flex
		sx={{
			gap: '1.5rem',
			textAlign: 'center',
			alignItems: 'center',
			flexDirection: 'column',
		}}
	>
		{children}
	</Flex>
);
const HeroSection = () => (
	<Hero>
		<HeroContent />
	</Hero>
);
const ProjectsSection = () => (
	<Box as="section">
		<h2>Projects</h2>
		<FlexContent>
			<Projects />
			<ProjectCard
				title="Gaboland"
				borderColor="success"
				to="https://github.com/gabrielba15/gaboland"
			>
				My personal website or portfolio. This projects is built with Gatsby,
				React and Theme UI.
			</ProjectCard>
			<ProjectCard
				title="Giffy"
				to="https://github.com/gabrielba15/react-giffy"
			>
				Gifs App using React, Styled Components and consuming giphy api.
			</ProjectCard>
			<ProjectCard
				title="PHP & MYSQL Parcial"
				borderColor="success"
				to="https://github.com/gabrielba15/php_mysql_parcial"
			>
				CRUD App using PHP, MySQL and Bootstrap for a university assessment.
			</ProjectCard>
		</FlexContent>
		<SectionLinks
			icon="github"
			text="All Projects"
			to={{ link: github, button: '/projects' }}
		/>
	</Box>
);

const SkillsSection = () => (
	<Box as="section">
		<h2>Skills</h2>
		<FlexContent>
			<Skills />
			<SkillCard
				title="Programming"
				borderColor="success"
				to="/skills/programming"
			>
				My life as a programmer started in 2019. I have 3 years of experiences
				and I'm still learning.
			</SkillCard>
			<SkillCard title="Design" to="/skills/design">
				I have 2 year designing and learning technologies associeted with it and
				I still don't stop.
			</SkillCard>
			<SkillCard
				title="Autodidact"
				borderColor="success"
				to="/skills/autodidact"
			>
				since 2017 I haven't stopped learning somenthing new every single day.
			</SkillCard>
		</FlexContent>
	</Box>
);
const ExperiencesSection = () => (
	<Box as="section">
		<h2>Experiences</h2>
		<FlexContent>
			<Experiences />
			<ExperienceCard
				title="Designer"
				company="Freelance"
				location="Barinas, Venezuela"
				year="1 year"
			/>
			<ExperienceCard
				title="Web Developer"
				company="Freelance"
				location="Barinas, Venezuela"
				year="2 years"
				borderColor="success"
			/>
			<ExperienceCard
				title="UI Designer"
				company="Freelance"
				location="Barinas, Venezuela"
				year="1 year"
			/>
		</FlexContent>
	</Box>
);
const ContactSection = () => (
	<Box as="section" id="contact">
		<h2>Contact</h2>
		<FlexContent>
			<Contact />
			<CardContact
				title="Work Contact"
				icons={{ first: 'email', second: 'linkedin' }}
				to={{
					first: linkedin,
					second: linkedin,
				}}
			>
				If you are an entrepreneur or somebody who are looking for someone who
				develop your app or website, you can contact me from 8:00h to 11:00h and
				from 15:00h to 18:h ET. for an immediate response.
			</CardContact>
			<CardContact
				title="Friendly Contact"
				icons={{ first: 'telegram', second: 'twitter' }}
				to={{
					first: 'https://t.me/gabrielba15',
					second: twitter,
				}}
			>
				If you're an old friend or a stranger who wants to contact me for
				anything (say hello, connection, etc.) write at any time through the
				media but do not expect an immediate response.
			</CardContact>
		</FlexContent>
	</Box>
);

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
				<HeroSection />
				<ProjectsSection />
				<SkillsSection />
				<ExperiencesSection />
				<ContactSection />
			</Box>
			<Footer />
		</MDXProvider>
	);
};

export default Home;
