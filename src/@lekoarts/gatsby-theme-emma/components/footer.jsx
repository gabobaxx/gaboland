import React from 'react';
import { Box, Flex, Button } from 'theme-ui';

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
		}}
		variant="layout.footer"
	>
		<Box className="bi bi-github" />
		<Button
			sx={{
				// p: 24,
				border: '2px solid',
				borderColor: 'p700',
				cursor: 'pointer',
				borderRadius: '0.3125rem',
			}}
		>
			About me
		</Button>
		<Box className="bi bi-instagram" />
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
