/* eslint-disable jsx-a11y/anchor-has-content */
import { Flex } from 'theme-ui';
import { Link as RLink } from '@remix-run/react';
import Link from 'components/links';

const FooterSocialLinks = () => (
	<Flex
		variant="layout.footer"
		sx={{
			py: 40,
			mt: 48,
			alignItems: 'center',
			justifyContent: 'space-between',
		}}
	>
		<Link
			as={RLink}
			key="gaboland-github"
			className="bi bi-github"
			to="https://github.com/gaboland"
			sx={{ fontSize: 24, color: 'gs200' }}
		/>
		<Link
			as={RLink}
			key="about"
			to="/about"
			sx={{
				color: 'warning',
				cursor: 'pointer',
				padding: '0.5rem',
				border: '2px solid',
				borderRadius: '8px',
				textAlign: 'center',
				fontSize: '0.875rem',
				minWidth: '8.125rem',
				borderColor: 'warning',
				textDecoration: 'none',
			}}
		>
			About Me
		</Link>
		<Link
			as={RLink}
			key="gaboland-instagram"
			className="bi bi-instagram"
			to="https://instagram.com/gaboland"
			sx={{ fontSize: 24, color: 'gs200' }}
		/>
	</Flex>
);

export default FooterSocialLinks;
