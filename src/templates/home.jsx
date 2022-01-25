/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
// Providers!
import { MDXProvider } from '@mdx-js/react';
// Hooks!
import useNavigation from '@lekoarts/gatsby-theme-emma/src/hooks/use-navigation';
import useSiteMetadata from '@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata';

// Third Party Components!
import { Flex } from 'theme-ui';
// Custom Components!
import SkillCard from 'components/cards/skill-card';
import CardContact from 'components/cards/contact-card';
import ExperienceCard from 'components/cards/experience-card';
import ProjectCard from 'components/cards/project-card';
import Seo from '@lekoarts/gatsby-theme-emma/src/components/seo';
import Footer from '@lekoarts/gatsby-theme-emma/components/footer';
import Header from '@lekoarts/gatsby-theme-emma/src/components/header';
import Hero from 'components/hero';
// Sections
import Skills from '../../content/sections/skills';
import Contact from '../../content/sections/contact';
import Projects from '../../content/sections/projects';
import Experiences from '../../content/sections/experiences';
import HeroContent from '../../content/sections/hero';

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

			<main className="container">
				<Hero>
					<HeroContent />
				</Hero>
				<h2>Projects</h2>
				<Flex
					sx={{
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
					}}
				>
					<Projects />
					<ProjectCard title="Gaboland" borderColor="success">
						My personal website or portfolio. This projects is built with
						Gatsby, React and Theme UI.
					</ProjectCard>
					<ProjectCard title="Giffy">
						Gifs App using React, Styled Components and consuming giphy api.
					</ProjectCard>
					<ProjectCard title="PHP & MYSQL Parcial" borderColor="success">
						CRUD App using PHP, MySQL and Bootstrap for a university assessment.
					</ProjectCard>
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
					<SkillCard title="Programming" borderColor="success">
						My life as a programmer started in 2019. I have 3 years of
						experiences and I'm still learning.
					</SkillCard>
					<SkillCard title="Design">
						I have 2 year designing and learning technologies associeted with it
						and I still don't stop.
					</SkillCard>
					<SkillCard title="Autodidact" borderColor="success">
						since 2017 I haven't stopped learning somenthing new every single
						day.
					</SkillCard>
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
					<CardContact
						title="Work Contact"
						icons={{ first: 'email', second: 'linkedin' }}
					>
						If you are an entrepreneur or somebody who are looking for someone
						who develop your app or website, you can contact me from 8:00h to
						11:00h and from 15:00h to 18:h ET. for an immediate response.
					</CardContact>
					<CardContact
						title="Friendly Contact"
						icons={{ first: 'telegram', second: 'twitter' }}
					>
						If you're an old friend or a stranger who wants to contact me for
						anything (say hello, connection, etc.) write at any time through the
						media but do not expect an immediate response.
					</CardContact>
				</Flex>
			</main>
			<Footer />
		</MDXProvider>
	);
};

export default Home;
