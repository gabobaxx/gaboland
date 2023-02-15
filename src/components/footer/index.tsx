import type { CSSProperties, ReactNode } from 'react';
import { Flex } from 'theme-ui';

type FooterProps = {
	children: ReactNode;
	sx?: CSSProperties;
};
const Footer = ({ children, sx }: FooterProps) => {
	return (
		<Flex as="footer" variant="layout.footer" sx={{ ...sx }}>
			{children}
		</Flex>
	);
};

export default Footer;
