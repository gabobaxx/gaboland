import { Box } from 'theme-ui';
import Hero from 'components/hero';
// import Contact from 'components/contact';
// import Skills from 'components/skills';
// import Projects from 'components/projects';
import Experiences from 'components/experiencies';

import ThemeChangerButton from 'components/buttons/theme-changer-button';

export default function Index() {
	return (
		<div style={{ minHeight: '55vh' }}>
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
				{/**
				 * * Header -> Layout
				 * * Hero
				 * * Featured -> Project & Post
				 * * More Posts
				 * * More Projects
				 * * Footer -> Layout
				 */}
				<Hero />
				{/*<Projects /> ! Making page refresh */}
				{/* <Contact /> ! Making page refresh */}
			</Box>
		</div>
	);
}
