import React from 'react';
import { Link as TLink } from 'theme-ui';
import { Link } from 'gatsby';
// Components
import Navigation from '@lekoarts/gatsby-theme-emma/src/components/navigation';
import ThemeChangerButton from '../../../components/theme-changer-button';
// import SocialLinks from '@lekoarts/gatsby-theme-emma/src/components/social-links';

const Header = ({ meta, nav }) => {
	const { siteTitle } = meta;
	const navEmpty = nav.length === 0;

	return (
		<React.Fragment>
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

			<ThemeChangerButton />
			{!navEmpty && <Navigation nav={nav} />}
		</React.Fragment>
	);
};

export default Header;
