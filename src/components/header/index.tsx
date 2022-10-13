// * Third Party
import { Flex } from 'theme-ui';
// * Custom
import NavLinks from 'components/nav';
import type { navLinks } from 'config/index';
import BurguerMenu from 'components/buttons/burguer-menu';
import ThemeChangerButton from 'components/buttons/theme-changer-button';

const Header = ({ links }: { links?: typeof navLinks }) => {
	// TODO -> make burguer menu works.
	// ? Burguer Menu -> About - Contact - Projects - Dark Mode Button - Blog Button

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
				<BurguerMenu />
			</Flex>
		</Flex>
	);
};

export default Header;
