import React from 'react';
import { Flex, useColorMode, Link as TLink } from 'theme-ui';
import { Link } from 'gatsby';
import Navigation from '@lekoarts/gatsby-theme-emma/src/components/navigation';
import SocialLinks from '@lekoarts/gatsby-theme-emma/src/components/social-links';

const Header = ({ meta, nav }) => {
	const [colorMode, setColorMode] = useColorMode();
	const isDark = colorMode === 'dark';
	const toggleColorMode = (_e) => {
		setColorMode(isDark ? 'light' : 'dark');
	};

	const navEmpty = nav.length === 0;

	return (
		<Flex as="header" variant="layout.header">
			{!navEmpty && <Navigation nav={nav} />}
			<Flex
				sx={{
					fontWeight: 'bold',
					fontSize: 4,
					flex: navEmpty ? 1 : ['1 0 50%', 1],
					justifyContent: navEmpty ? 'flex-start' : ['flex-end', 'center'],
				}}
			>
				<TLink
					aria-label={`${meta.siteTitle}, Back to homepage`}
					as={Link}
					sx={{
						color: 'text',
						':hover': { color: 'primary', textDecoration: 'none' },
					}}
					to="/"
				>
					{meta.siteTitle}
				</TLink>
			</Flex>
			<div
				sx={{
					a: {
						fontSize: 4,
						color: 'text',
						display: 'flex',
						alignItems: 'center',
						'&:hover': {
							color: 'primary',
						},
						'&:not(:first-of-type)': {
							ml: 2,
						},
					},
					justifyContent: 'flex-end',
					flex: 1,
					display: 'flex',
					order: 3,
				}}
			>
				<SocialLinks />
				<button
					sx={{ variant: 'buttons.toggle', fontWeight: 'semibold' }}
					onClick={toggleColorMode}
					type="button"
					aria-label="Toggle dark mode"
				>
					{isDark ? 'Light' : 'Dark'}
				</button>
			</div>
		</Flex>
	);
};

// const ThemeChangerButton = () => {
// 	const [colorMode, setColorMode] = useColorMode();
// 	const isDark = colorMode === 'dark';
// 	const toggleColorMode = (e) => {
// 		console.log(e);
// 		setColorMode(isDark ? 'light' : 'dark');
// 	};
// 	return (
// 		<button
// 			sx={{ variant: 'buttons.toggle', fontWeight: 'semibold' }}
// 			onClick={toggleColorMode}
// 			type="button"
// 			aria-label="Toggle dark mode"
// 		>
// 			{isDark ? 'Light' : 'Dark'}
// 		</button>
// 	);
// };

// const Header = ({ meta, nav }) => {
// 	const { siteTitle } = meta;
// 	const navEmpty = nav.length === 0;

// 	return (
// 		<React.Fragment>
// 			<TLink
// 				aria-label={`${siteTitle}, Back to homepage`}
// 				as={Link}
// 				sx={{
// 					color: 'text',
// 					':hover': { color: 'primary', textDecoration: 'none' },
// 				}}
// 				to="/"
// 			>
// 				{siteTitle}
// 			</TLink>

// 			<ThemeChangerButton />
// 			{!navEmpty && <Navigation nav={nav} />}
// 		</React.Fragment>
// 	);
// };

export default Header;
