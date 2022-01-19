import * as React from 'react';
import { Card, Box } from 'theme-ui';
import ButtonWithIcon from 'components/buttons/button-with-icon';

const ContactCard = ({
	children,
	borderColor = 'p700',
	title = 'Contact Card',
	icons = { first: 'github', second: 'linkedin' }
}) => (
	<Card sx={{ borderColor, variant: 'cards' }} variant="cards.large">
		<Card as="section" variant="cards.large.content">
			<Box as="header">{title} </Box>
			<Box as="p">{children}</Box>
			<Box as="footer">
				<ButtonWithIcon icon={icons.first} />
				<ButtonWithIcon icon={icons.second} />
			</Box>
		</Card>
	</Card>
);

export default ContactCard;
