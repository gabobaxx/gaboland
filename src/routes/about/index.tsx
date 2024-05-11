import Header from 'components/header';
import { PageNavLinks } from 'config';

export default function About() {
	return (
		<>
			<Header links={PageNavLinks.main} />
			<div className="w-96 bg-red-300">w-96</div>
		</>
	);
}
