import React from 'react';
import { Link as TLink, Flex } from 'theme-ui';
import { Link } from 'gatsby';
import { pages } from '../../../utils/options';

const Navigation = ({ nav }) => {
	return (
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
			{nav.map((n) =>
				pages.map((p) =>
					n.title == p ? (
						<TLink
							as={Link}
							sx={{
								color: 'text',
								':hover': { color: 'primary', textDecoration: 'none' },
							}}
							key={n.slug}
							to={n.slug}
						>
							{n.title}
						</TLink>
					) : null
				)
			)}
		</Flex>
	);
};

export default Navigation;
