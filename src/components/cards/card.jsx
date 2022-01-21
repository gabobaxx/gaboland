import * as React from 'react';
import { Card, Box } from 'theme-ui';

const CardSkill = ({ _title, _borderColor }) => <h1>H</h1>;
const CardProject = ({ _title, _borderColor }) => <h1>H</h1>;
export const SmallCard = ({ children, borderColor = 'p700' }) => (
	<Card
		sx={{ borderColor: borderColor, variant: 'cards' }}
		variant="cards.small"
	>
		<Card as="section" variant="cards.small.content">
			{children}
		</Card>
	</Card>
);
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
