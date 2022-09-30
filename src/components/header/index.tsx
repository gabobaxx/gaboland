import { Flex } from 'theme-ui';
import { Link as RLink } from '@remix-run/react';

import { navLinks } from 'config';
import Link from 'components/links';
import NavLinks from 'components/nav';

type HeaderProps = {
	title?: string;
};
const Header = ({ title = 'Gaboland' }: HeaderProps) => {
	return (
		<Flex
			as="header"
			variant="layout.header"
			sx={{
				fontFamily: 'head',
				fontWeight: 'bold',
			}}
		>
			<Flex
				sx={{
					flex: 1,
					fontSize: 20,
					justifyContent: navLinks.length === 0 ? 'center' : 'flex-start',
				}}
			>
				<Link
					to="/"
					as={RLink}
					aria-label={`${title}, Back to homepage`}
					sx={{
						color: 'p700',
						':hover': { color: 'p300', textDecoration: 'none' },
					}}
				>
					{title}
				</Link>
			</Flex>
			<NavLinks />
		</Flex>
	);
};

export default Header;
