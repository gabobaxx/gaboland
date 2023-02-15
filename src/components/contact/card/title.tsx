import { Box } from 'theme-ui';
import type { ComponentProps } from 'types';

const Title = ({ children, sx }: ComponentProps) => {
	return (
		<Box as="header" sx={{ ...sx }}>
			{children}
		</Box>
	);
};

export default Title;
