import { Box } from 'theme-ui';
// * Custom Components
import Header from 'components/header';
import Hero from 'components/hero';

import { defaultLinks } from 'config';
export default function Index() {
	return (
		<div style={{ minHeight: '55vh' }}>
			<Header links={defaultLinks.main} />
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
				<h1>Hola</h1>
				<p>Hola soy un p</p>
				{/*<Projects /> ! Making page refresh */}
				{/* <Contact /> ! Making page refresh */}
			</Box>
		</div>
	);
}
