import React from 'react';
import { Link as TLink, Flex } from 'theme-ui';
import { Link } from 'gatsby';
import { pages } from '../../../utils/options';
import ThemeChangerButton from '../../../components/theme-changer-button';

const Navigation = ({ nav }) => {
	return (
		<Flex
			as="nav"
			sx={{
				justifyContent: 'flex-end',
				'a:not(:last-of-type)': {
					mr: 2,
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
			<ThemeChangerButton />
		</Flex>
	);
};

export default Navigation;
