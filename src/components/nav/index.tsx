import { Flex } from 'theme-ui';
import { Link as RLink } from '@remix-run/react';
// * Custom
import Link from 'components/links';
import { navLinks as links } from 'config';

export default function NavLinks() {
	return (
		<Flex
			as="nav"
			aria-label="Primary Navigation"
			sx={{ gap: ['12px', '24px'] }}
		>
			{links.length !== 0 &&
				links.map((n) => (
					<Link as={RLink} to={n.slug} key={n.slug}>
						{n.title}
					</Link>
				))}
		</Flex>
	);
}
