import { useColorMode, Button } from 'theme-ui';
import { Theme, useTheme } from 'utils/theme-provider';

const ThemeChangerButton = () => {
	// Tailwind theme changer
	const [, setTheme] = useTheme();

	const [colorMode, setColorMode] = useColorMode();
	const isDark = colorMode === 'dark';
	const toggleColorMode = (_e) => {
		setColorMode(isDark ? 'light' : 'dark');
		// Tailwind theme changer
		setTheme((prevTheme) =>
			prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		);
	};

	return (
		<Button
			as="button"
			variant="buttons.toggle"
			onClick={toggleColorMode}
			aria-label="Toggle dark mode"
		>
			{isDark ? (
				<i className="bi bi-brightness-high"></i>
			) : (
				<i className="bi bi-moon-stars"></i>
			)}
		</Button>
	);
};

export default ThemeChangerButton;
