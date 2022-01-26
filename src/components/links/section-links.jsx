import * as React from 'react';
import { Flex } from 'theme-ui';
import LinkWithIcon from 'components/links/link-with-icon';
import ButtonWithIcon from 'components/buttons/button-with-icon';

const SectionLinks = ({
	text = 'Section Links',
	icon = 'github',
	to = '/',
}) => (
	<Flex
		sx={{ justifyContent: 'space-between', alignItems: 'center', mt: '3rem' }}
	>
		<ButtonWithIcon icon={icon}>{icon.capitalizer()}</ButtonWithIcon>
		<LinkWithIcon to={to}> {text} </LinkWithIcon>
	</Flex>
);

export default SectionLinks;
