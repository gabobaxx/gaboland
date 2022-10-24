// * Third Party
import { Flex } from 'theme-ui';
// * Custom
import NavLinks from 'components/nav';
import type { navLinks } from 'config/index';
import ThemeChangerButton from 'components/buttons/theme-changer-button';

const Header = ({ links }: { links?: typeof navLinks }) => {
	return (
		<Flex as="header" variant="layout.header">
			<Flex
				sx={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'flex-start',
				}}
			>
				<NavLinks links={links} />
			</Flex>
			<Flex sx={{ gap: '12px' }}>
				<ThemeChangerButton />
			</Flex>
		</Flex>
	);
};

export default Header;
