import * as React from 'react';
import { Box } from 'theme-ui';
import SmallCard from './small-card';

const ToolsCard = ({ children, title = 'Tool Card Title' }) => (
	<SmallCard borderColor="warning">
		<Box
			as="h3"
			sx={{
				fontFamily: 'head',
				fontWeight: 'bold',
				fontSize: '1rem',
				color: 'gs800',
			}}
		>
			{title}
		</Box>
		{children}
	</SmallCard>
);

export default ToolsCard;
