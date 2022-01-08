import React from 'react';
import { Flex, Link as TLink } from 'theme-ui';
import { Link } from 'gatsby';
// Components
import Navigation from '@lekoarts/gatsby-theme-emma/src/components/navigation';
// import SocialLinks from '@lekoarts/gatsby-theme-emma/src/components/social-links';

const Header = ({ meta, nav }) => {
	const { siteTitle } = meta;
	const navEmpty = nav.length === 0;

	return (
		<Flex as="header" variant="layout.header">
			<Flex
				sx={{
					fontWeight: 'bold',
					fontSize: 4,
					flex: 1,
					justifyContent: navEmpty ? 'center' : 'flex-start',
				}}
			>
				<TLink
					aria-label={`${siteTitle}, Back to homepage`}
					as={Link}
					sx={{
						color: 'text',
						':hover': { color: 'primary', textDecoration: 'none' },
					}}
					to="/"
				>
					{siteTitle}
				</TLink>
			</Flex>

			<Flex
				sx={{
					a: {
						fontSize: 2,
						color: 'text',
						display: 'flex',
						alignItems: 'center',
						'&:hover': {
							color: 'primary',
						},
						'&:not(:first-of-type)': {
							ml: 1,
						},
					},
					display: 'flex',
					justifyContent: 'flex-end',
					order: 4,
					ml: 1,
				}}
			>
				{!navEmpty && <Navigation nav={nav} />}
			</Flex>
		</Flex>
	);
};

export default Header;
