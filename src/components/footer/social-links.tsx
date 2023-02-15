import Link from 'components/links';
import { Link as RLink } from '@remix-run/react';

import { SocialLinks as links } from 'config';

import { Flex } from 'theme-ui';

const FooterSocialLinks = () => (
	<Flex variant="layout.footer.links">
		<a
			target="_blank"
			href={links.github}
			rel="noopener noreferrer"
			style={{ fontSize: '24px' }}
		>
			<i className="bi bi-github"></i>
		</a>

		<Link as={RLink} to="/about" variant="layout.button.outline">
			About Me
		</Link>

		<a
			target="_blank"
			href={links.instagram}
			rel="noopener noreferrer"
			style={{ fontSize: '24px' }}
		>
			<i className="bi bi-instagram"></i>
		</a>
	</Flex>
);

export default FooterSocialLinks;
