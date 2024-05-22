import Header from 'components/header';
import { PageNavLinks } from 'config';
import VideoDemo from 'components/demo';
import CallAgenda from 'components/agenda';
import TailwindHero from 'components/hero/tailwind-hero';
import { me as gabriel } from 'config';

export default function About() {
	return (
		<>
			<Header links={PageNavLinks.about} />

			<main className="max-w-sm md:max-w-screen-md p-6 mx-auto">
				<TailwindHero name={gabriel.name} occupation={gabriel.occupation} />
			</main>
		</>
	);
}
