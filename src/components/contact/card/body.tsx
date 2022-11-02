import { Box } from 'theme-ui';
import type { ComponentProps } from 'types';

const Body = ({ children, sx }: ComponentProps) => {
	return (
		<Box as="p" sx={{ ...sx }}>
			{children}
		</Box>
	);
};

export default Body;
