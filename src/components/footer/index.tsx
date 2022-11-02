import type { ReactNode } from 'react';
import { Flex } from 'theme-ui';

type FooterProps = {
	children: ReactNode;
};
const Footer = ({ children }: FooterProps) => {
	return (
		<Flex as="footer" variant="layout.footer">
			{children}
		</Flex>
	);
};

export default Footer;
