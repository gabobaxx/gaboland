import { Flex } from 'theme-ui';
import { Link as RLink } from '@remix-run/react';
// * Custom
import Link from 'components/links';
import type { navLinks } from 'config';
import { defaultLinks } from 'config';

export default function NavLinks({ links }: { links?: typeof navLinks }) {
	const linksToRender = links ?? defaultLinks.default;
	return (
		<Flex
			as="nav"
			aria-label="Primary Navigation"
			sx={{ gap: ['12px', '24px'] }}
		>
			{linksToRender.length !== 0 &&
				linksToRender.map((n) => (
					<Link as={RLink} to={n.slug} key={n.slug}>
						{n.title}
					</Link>
				))}
		</Flex>
	);
}
