
import * as React from 'react';
import { Card, Box } from 'theme-ui';

export const CardVertical = ({
	children,
	borderColor = 'p700',
	title = 'Vertical Card',
}) => (
	<Card sx={{ variant: 'cards', borderColor }} variant="cards.small">
		<Card as="section" variant="cards.small.content">
			<Box as="header">{title}</Box>
			<Box as="p">{children}</Box>
		</Card>
	</Card>
);
