import * as React from 'react';
import { Card, Box } from 'theme-ui';

const CardExperience = ({ _title, _borderColor }) => <h1>H</h1>;
const CardSkill = ({ _title, _borderColor }) => <h1>H</h1>;
const CardProject = ({ _title, _borderColor }) => <h1>H</h1>;

export const CardVertical = ({ children, title, borderColor }) => (
	<Card
		variant="cards"
		sx={{
			maxWidth: 366,
			height: 149,
			borderColor: borderColor || 'p700',
			borderRadius: 20,
		}}
	>
		<Card
			as="section"
			sx={{
				width: 318,
				height: 125,
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{ display: 'flex', justifyContent: 'space-between' }}
				as="header"
			>
				{title}
			</Box>
			<Box as="p">{children}</Box>
		</Card>
	</Card>
);
