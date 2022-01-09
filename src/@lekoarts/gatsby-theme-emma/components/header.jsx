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
		<Flex
			as="header"
			variant="layout.header"
			sx={{
				fontFamily: 'head',
				fontWeight: 'bold',
			}}
		>
			{/* Site Title (Gaboland) */}
			<Flex
				sx={{
					flex: 1,
					fontSize: 20,
					justifyContent: navEmpty ? 'center' : 'flex-start',
				}}
			>
				<TLink
					aria-label={`${siteTitle}, Back to homepage`}
					as={Link}
					sx={{
						color: 'p700',
						':hover': { color: 'p300', textDecoration: 'none' },
					}}
					to="/"
				>
					{siteTitle}
				</TLink>
			</Flex>
			{/* Menu Links */}
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
				{!navEmpty && <Navigation nav={nav} />}
			</Flex>
		</Flex>
	);
};

export default Header;
