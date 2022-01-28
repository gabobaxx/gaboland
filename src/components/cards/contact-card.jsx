import * as React from 'react';
import { Card, Box } from 'theme-ui';
import ButtonWithIcon from 'components/buttons/button-with-icon';

// Polyfill for capitalize (upper case first letter) a string.
String.prototype.capitalizer = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

const ContactCard = ({
	children,
	borderColor = 'p700',
	title = 'Contact Card',
	icons = { first: 'github', second: 'linkedin' },
	to = { first: '/', second: '/' },
}) => (
	<Card sx={{ variant: 'cards', borderColor }} variant="cards.large">
		<Card as="section" variant="cards.large.content">
			<Box as="header">{title} </Box>
			<Box as="p">{children}</Box>
			<Box as="footer">
				<ButtonWithIcon icon={icons.first} to={to.first}>
					{icons.first.capitalizer()}
				</ButtonWithIcon>
				<ButtonWithIcon icon={icons.second} to={to.second}>
					{icons.second.capitalizer()}
				</ButtonWithIcon>
			</Box>
		</Card>
	</Card>
);

export default ContactCard;
