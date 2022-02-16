import * as React from 'react';
import { Card, Box } from 'theme-ui';
import SmallCard from 'components/cards/small-card';

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

export const NormalCard = ({ children, title }) => (
	<SmallCard sx={{ display: 'flex', gap: '1.5rem' }}>
		<Box as="h2" sx={{ fontSize: 20, mb: '0.5rem' }}>
			{title}
		</Box>
		<Box
			as="p"
			sx={{
				fontFamily: 'body',
				fontWeight: 'regular',
				fontSize: '1rem',
				color: 'gs800',
			}}
		>
			{children}
		</Box>
	</SmallCard>
);
