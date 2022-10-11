// * Third Party
import { Flex } from 'theme-ui';
// * Custom
import NavLinks from 'components/nav';
import { navLinks } from 'config/index';
import BurguerMenu from 'components/buttons/burguer-menu';
import ThemeChangerButton from 'components/buttons/theme-changer-button';

const Header = () => {
	// TODO -> make burguer menu works.
	// ? Burguer Menu -> About - Contact - Projects - Dark Mode Button - Blog Button
	return (
		<Flex as="header" variant="layout.header">
			<Flex
				sx={{
					flex: 1,
					alignItems: 'center',
					justifyContent: navLinks.length === 0 ? 'center' : 'flex-start',
				}}
			>
				<NavLinks />
			</Flex>
			<Flex sx={{ gap: '12px' }}>
				<ThemeChangerButton />
				<BurguerMenu />
			</Flex>
		</Flex>
	);
};

export default Header;
