import React from 'react';
import { Box, Flex } from 'theme-ui';

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
		<Box as="footer">Github</Box>
		<button>About me</button>
		<Box as="footer">Insta</Box>
	</Flex>
);
const Footer = () => {
	return (
		<React.Fragment>
			<FooterSocialLinks />
			<Copyright />
		</React.Fragment>
	);
};

export default Footer;
