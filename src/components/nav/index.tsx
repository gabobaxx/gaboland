import { Flex } from 'theme-ui';
import { Link as RLink } from '@remix-run/react';
// * Custom
import Link from 'components/links';
import { PageNavLinks } from 'config';
// * Types
import type { NavLink } from 'types';

export default function NavLinks({ links }: { links?: NavLink[] }) {
	const linksToRender = links ?? PageNavLinks.default;
	return (
		<Flex
			as="nav"
			aria-label="Primary Navigation"
			sx={{ gap: ['12px', '24px'] }}
		>
			{linksToRender.length !== 0 &&
				linksToRender.map((link) => (
					<Link as={RLink} to={link.slug} key={link.slug}>
						{link.title}
					</Link>
				))}
		</Flex>
	);
}
