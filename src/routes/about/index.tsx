import Header from 'components/header';
import { PageNavLinks } from 'config';
import VideoDemo from 'components/demo';
import CallAgenda from 'components/agenda';
import GPHero from 'components/hero/gp-hero';
import TitleWithStarIcon from 'components/sections/title-with-star';
import TailwindHeader from 'components/header/tailwind-header';

export default function About() {
	return (
		<>
			<Header links={PageNavLinks.about} />
			<main className="max-w-sm md:max-w-screen-md p-6 mx-auto">
				<VideoDemo />
				<CallAgenda />
				<GPHero />
				<TitleWithStarIcon className="mt-6 justify-center items-center">
					AGENDA UNA LLAMADA PARA IMPULSAR TU MARCA
				</TitleWithStarIcon>
			</main>
		</>
	);
}
