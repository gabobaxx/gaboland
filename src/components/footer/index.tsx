import { Box } from 'theme-ui';
import Copyright from 'components/footer/copyright';
import FooterSocialLinks from 'components/footer/social-links';

const Footer = () => {
	return (
		<Box as="footer">
			<FooterSocialLinks />
			<Copyright />
		</Box>
	);
};

export default Footer;
