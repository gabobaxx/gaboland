import { Card } from 'theme-ui';
import type { ComponentProps } from 'types';

import Body from './body';
import Title from './title';
import Footer from './footer';

const ContactCard = ({ children, sx }: ComponentProps) => {
	return (
		<Card variant="layout.contact.card" sx={{ ...sx }}>
			{children}
		</Card>
	);
};

export { Title, Body, Footer, ContactCard };
