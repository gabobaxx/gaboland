import { Flex } from 'theme-ui';
import LinkWithIcon from 'components/links/link-with-icon';
import ButtonWithIcon from 'components/buttons/button-with-icon';

const SectionLinks = ({
	text = 'Section Links',
	icon = 'github',
	to = { button: '/', link: '/' },
}) => (
	<Flex
		sx={{
			mt: '1.5rem',
			mx: '0.3125rem',
			alignItems: 'center',
			justifyContent: 'space-between',
		}}
	>
		{/* el link se parece a un boton y el boton se parece a un link */}
		<ButtonWithIcon icon={icon} to={to.link}>
			{icon}
		</ButtonWithIcon>
		<LinkWithIcon to={to.button}>{text}</LinkWithIcon>
	</Flex>
);

export default SectionLinks;
