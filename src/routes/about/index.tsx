import Header from 'components/header';
import { PageNavLinks } from 'config';

export default function About() {
	return (
		<>
			<Header links={PageNavLinks.about} />
			<h1>About</h1>
		</>
	);
}
