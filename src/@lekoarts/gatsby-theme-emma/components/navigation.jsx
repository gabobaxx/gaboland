import React from 'react';
import { Link as TLink, Flex } from 'theme-ui';
import { Link } from 'gatsby';
import { pages } from '../../../utils/options';
// import ThemeChangerButton from '../../../components/theme-changer-button';

const Navigation = ({ nav }) => {
	return (
		<Flex as="nav" aria-label="Primary Navigation">
			{nav.map((n) =>
				pages.map((p) =>
					n.title == p ? (
						<TLink as={Link} key={n.slug} to={n.slug}>
							{n.title}
						</TLink>
					) : null
				)
			)}
			<TLink as={Link} to="/projects">
				Projects
			</TLink>

			<TLink as={Link} to="#contact">
				Contact
			</TLink>
			{/* <ThemeChangerButton /> */}
		</Flex>
	);
};

export default Navigation;
