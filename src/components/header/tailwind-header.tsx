import NavLinks from 'components/nav/tailwind-nav';
import ThemeChangerButton from 'components/buttons/tailwind-theme-changer-button';
import type { NavLink } from 'types';

export default function Header({ links }: { links?: NavLink[] }) {
	return (
		<header className="mt-6 px-6 font-bold flex justify-between items-center text-base md:text-xl">
			<NavLinks links={links} />
			<ThemeChangerButton />
		</header>
	);
}
