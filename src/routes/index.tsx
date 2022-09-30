import { Box } from 'theme-ui';
import Hero from 'components/hero';
// import Contact from 'components/contact';
// import Skills from 'components/skills';
// import Projects from 'components/projects';
import Experiences from 'components/experiencies';

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
				<Hero />
				{/*<Projects /> ! Making page refresh */}
				{/* <Contact /> ! Making page refresh */}
				{/* <Skills /> ! Making page refresh */}
				<Experiences />
			</Box>
		</div>
	);
}
