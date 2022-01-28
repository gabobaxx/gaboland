import React from 'react';
import { Box, Flex, Link as TLink } from 'theme-ui';
import { Link } from 'gatsby';

const bg = 'var(--theme-ui-colors-pgradient)';

{
	/* <TLink
	as={Link}
	key="about"
	to="/about"
	sx={{
		
	}}
>
	About Me
</TLink>; */
}

const Copyright = () => (
	<Flex
		variant="layout.footer"
		sx={{ justifyContent: 'space-between', fontSize: '0.8rem' }}
	>
		<Box as="p">&copy; {new Date().getFullYear()}. All rights reserved.</Box>
		<Box as="p">
			Made with{' '}
			<Box
				as="i"
				className="bi bi-heart-fill"
				style={{
					background: 'var(--theme-ui-colors-sgradient',
					webkitBackgroundClip: 'text',
					webkitTextFillColor: 'transparent',
				}}
			></Box>{' '}
			by gabriel.
		</Box>
	</Flex>
);

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
		<TLink
			as={Link}
			key="gaboland-github"
			className="bi bi-github"
			to="https://github.com/gaboland"
			sx={{ fontSize: 24, color: 'gs200' }}
		/>
		<TLink
			as={Link}
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
		</TLink>
		<TLink
			as={Link}
			key="gaboland-instagram"
			className="bi bi-instagram"
			to="https://instagram.com/gaboland"
			sx={{ fontSize: 24, color: 'gs200' }}
		/>
	</Flex>
);
const Footer = () => {
	return (
		<Box as="footer" sx={{ background: bg }}>
			<FooterSocialLinks />
			<Copyright />
		</Box>
	);
};

export default Footer;
