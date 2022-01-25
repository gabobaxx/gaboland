import React from 'react';
import { Box, Flex, Button, Link as TLink } from 'theme-ui';
import { Link } from 'gatsby';

const Copyright = () => (
	<Flex
		sx={{
			display: 'flex',
			backgroundColor: 'primary',
			justifyContent: 'space-between',
		}}
		variant="layout.footer"
	>
		<Box as="footer">
			&copy; {new Date().getFullYear()}. All rights reserved.
		</Box>
		<Box as="footer">Made with LOVE by gaboland team.</Box>
	</Flex>
);

const FooterSocialLinks = () => (
	<Flex
		sx={{
			py: 40,
			mt: 48,
			display: 'flex',
			backgroundColor: 'primary',
			justifyContent: 'space-between',
			alignItems: 'center',
		}}
		variant="layout.footer"
	>
		<TLink
			as={Link}
			key="gaboland-github"
			sx={{ fontSize: 24, color: 'gs200' }}
			to="https://github.com/gaboland"
			className="bi bi-github"
		/>
		<TLink
			as={Link}
			key="about"
			to="/about"
			sx={{
				// p: 24,
				border: '2px solid',
				borderColor: 'warning',
				cursor: 'pointer',
				textAlign: 'center',
				textDecoration: 'none',
				borderRadius: '8px',
				minWidth: '8.125rem',
				padding: '0.5rem',
				fontSize: '0.875rem',
				color: 'warning',
			}}
		>
			About Me
		</TLink>
		<TLink
			as={Link}
			key="gaboland-instagram"
			sx={{ fontSize: 24, color: 'gs200' }}
			to="https://instagram.com/gaboland"
			className="bi bi-instagram"
		/>
	</Flex>
);
const Footer = () => {
	return (
		<Box as="footer">
			<FooterSocialLinks />
			<Copyright />
		</Box>
	);
};

export default Footer;
