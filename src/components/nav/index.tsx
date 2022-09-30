import { Flex } from 'theme-ui';
import { Link as RLink } from '@remix-run/react';

import Link from 'components/links';
import { navLinks as links } from 'config';

export default function NavLinks() {
	return (
		<Flex
			sx={{
				ml: 1,
				order: 4,
				display: 'flex',
				justifyContent: 'flex-end',
				a: {
					fontSize: 10,
					color: 'p700',
					display: 'flex',
					alignItems: 'center',
					'&:hover': {
						color: 'p300',
						textDecoration: 'none',
					},
					'a:not(:last-of-type)': {
						mr: 2,
					},
					'&:not(:first-of-type)': {
						ml: 1,
					},
				},
			}}
		>
			<Flex
				as="nav"
				sx={{
					flex: ['1 0 50%', 1],
					justifyContent: 'flex-start',
					'a:not(:last-of-type)': {
						mr: 3,
					},
				}}
				aria-label="Primary Navigation"
			>
				{links.length !== 0 &&
					links.map((n) => (
						<Link
							sx={(t) => ({
								...t.styles?.a,
								color: 'text',
								':hover': { color: 'primary', textDecoration: 'none' },
							})}
							key={n.slug}
							to={n.slug}
							as={RLink}
						>
							{n.title}
						</Link>
					))}
			</Flex>
		</Flex>
	);
}
