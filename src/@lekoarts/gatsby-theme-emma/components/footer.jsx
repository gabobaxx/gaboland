import React from 'react';
import { Box, Flex } from 'theme-ui';

const Footer = () => {
	return (
		<Flex
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				fontSize: 1,
			}}
		>
			<Box as="footer" variant="layout.footer">
				&copy; {new Date().getFullYear()}. All rights reserved.
			</Box>
			<Box as="footer" variant="layout.footer">
				Made with LOVE by gaboland team.
			</Box>
		</Flex>
	);
};

export default Footer;
