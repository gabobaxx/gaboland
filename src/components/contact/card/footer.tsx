import { Box } from 'theme-ui';
import type { ComponentProps } from 'types';

const Footer = ({ children, sx }: ComponentProps) => {
	return (
		<Box as="footer" sx={{ ...sx }}>
			{children}
		</Box>
	);
};

export default Footer;
