import * as React from 'react';
import { Flex } from 'theme-ui';
import LinkWithIcon from 'components/links/link-with-icon';
import ButtonWithIcon from 'components/buttons/button-with-icon';

const SectionLinks = ({
	text = 'Section Links',
	icon = 'github',
	to = { button: '/', link: '/' },
}) => (
	<Flex
		sx={{ justifyContent: 'space-between', alignItems: 'center', mt: '3rem' }}
	>
		{/* el link se parece a un boton y el boton se parece a un link */}
		<ButtonWithIcon icon={icon} to={to.link}>
			{icon.capitalizer()}
		</ButtonWithIcon>
		<LinkWithIcon to={to.button}>{text}</LinkWithIcon>
	</Flex>
);

export default SectionLinks;
