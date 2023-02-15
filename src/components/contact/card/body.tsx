import { Box } from 'theme-ui';
import type { ComponentProps } from 'types';

const Body = ({ children, sx }: ComponentProps) => {
	return (
		<Box sx={{ ...sx }} as="p">
			{children}
		</Box>
	);
};

export default Body;
