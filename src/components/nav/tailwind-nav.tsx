import type { NavLink } from 'types';
import { PageNavLinks } from 'config';
import Link from 'components/links/tailwind-link';

export default function NavLinks({ links }: { links?: NavLink[] }) {
	const linksToRender = links ?? PageNavLinks.default;
	return (
		<nav
			className="flex gap-3 md:gap-6 text-sm md:text-xl"
			aria-label="Primary Navigation"
		>
			{linksToRender.length !== 0 &&
				linksToRender.map((link) => (
					<Link href={link.slug} key={link.slug}>
						{link.title}
					</Link>
				))}
		</nav>
	);
}
