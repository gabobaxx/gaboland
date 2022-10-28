import { Flex } from 'theme-ui';
import { SocialLinksBadges } from 'components/links/social-links-badges';

const Footer = () => {
	return (
		<Flex as="footer" variant="layout.footer">
			<SocialLinksBadges hidden={{ responsive: 'twitter' }} />
		</Flex>
	);
};

export default Footer;
