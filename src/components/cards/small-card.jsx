import * as React from 'react';
import { Card } from 'theme-ui';

const SmallCard = ({ children, borderColor = 'p700' }) => (
	<Card
		sx={{ variant: 'cards', borderColor: borderColor }}
		variant="cards.small"
	>
		<Card as="section" variant="cards.small.content">
			{children}
		</Card>
	</Card>
);

export default SmallCard;
